"use client";
import React, { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { StarIcon, UploadFileIcon } from "@/lib/icon";
import { Button } from "../ui/button";
import { useToast } from "../ui/toast/use-toast";
import usePDFFile from "@/lib/hooks/useFileMetaData";
import { CheckCircledIcon, Cross2Icon, ImageIcon } from "@radix-ui/react-icons";
import { Progress } from "../ui/progress";
import useZustStore from "@/zustand/store";

const PdfUploader = () => {
  const pdfEvaluatedData = useZustStore((value) => value.updateEvaluatedPdfData);
  const [courseValue, setCourseValue] = useState<string | undefined>(undefined);
  const [subjectValue, setSubjectValue] = useState<string | undefined>(undefined);
  const [essayTitle, setEssayTitle] = useState<string | undefined>("");
  const { file, metadata, handleFileChange, setFile, setMetadata } = usePDFFile();
  const [progress, setProgress] = useState(13);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const { toast } = useToast();
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    if (droppedFiles[0].type !== "application/pdf") {
      toast({
        title: "Please upload pdf",
        variant: "destructive",
        duration: 2000,
      });
    }
    if (droppedFiles[0]?.size > 25 * 1024 * 1024) {
      toast({
        title: "Please upload smaller then 25 MB pdf",
        variant: "destructive",
        duration: 2000,
      });
    }
    handleFileChange(droppedFiles[0]);
    setUploadingPdf(true);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const pdfFiles = event.target.files?.[0];
    if (pdfFiles?.type !== "application/pdf" || !pdfFiles) {
      toast({
        title: "Please upload pdf",
        variant: "destructive",
        duration: 2000,
      });
      return;
    }
    if (pdfFiles?.size > 25 * 1024 * 1024) {
      toast({
        title: "Please upload smaller then 25 MB pdf",
        variant: "destructive",
        duration: 2000,
      });
    }
    if (pdfFiles) {
      setUploadingPdf(true);
      handleFileChange(pdfFiles);
    }
  };
  useEffect(() => {
    if (file) {
      setUploadingPdf(false);
    }
  }, [file, setUploadingPdf]);
  useEffect(() => {
    let timer: any;
    if (file) {
      timer = setTimeout(() => setProgress(66), 500);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [file]);
  return (
    <div className="sm:px-4 sm:space-y-2 max-w-[45rem]">
      <p className="font-extrabold text-3xl text-wrap">
        Hey IB Folks ! Unsure about the quality of your answers? <span className="text-primary"> We get you.</span>
      </p>
      <div className="p-2 bg-white drop-shadow-sm rounded-xl md:p-4">
        <div onDrop={handleDrop} onDragOver={handleDragOver} className="border-2 border-dashed p-2 bg-white ">
          {uploadingPdf ? (
            <div className="h-[10rem] flex justify-center items-center">
              <Progress value={progress} className="w-[60%]" />
            </div>
          ) : metadata ? (
            <div className="h-[10rem] flex justify-center items-center">
              <div className="relative border p-4 max-w-[20rem] rounded-lg  gap-2  flex items-center">
                <div
                  className="absolute -top-1 -right-2 border rounded-full cursor-pointer"
                  onClick={() => {
                    setFile(null);
                    setMetadata(null);
                  }}>
                  <Cross2Icon />
                </div>
                <div className="h-full bg-bgPrimary p-4 rounded-lg">
                  <ImageIcon />
                </div>
                <div>
                  <CheckCircledIcon color="green" />
                </div>
                <span className="single-line-text">{metadata.name}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4 h-[10rem]">
              <UploadFileIcon />
              <div className="text-textGrey flex flex-col items-center">
                <p className="font-semibold">Drag and drop a PDF</p>
                <p className="text-sm">"Limit 25 MB per file"</p>
              </div>
              <Input accept=".pdf" ref={pdfInputRef} type="file" multiple={false} onChange={handleFileSelect} style={{ display: "none" }} id="fileInput" />
              <Button
                onClick={() => {
                  if (pdfInputRef.current?.value) {
                    pdfInputRef.current.value = "";
                  }
                  pdfInputRef.current?.click();
                }}
                className="bg-white hover:bg-white border-primary border rounded-full text-primary font-bold">
                Upload your file
              </Button>
            </div>
          )}
        </div>
        <div className="space-y-4 py-2">
          <div>
            <p className="text-textGrey text-[14px]">Select your course & subjects*</p>
            <div className="flex flex-wrap gap-4">
              <Select
                value={courseValue}
                onValueChange={(e) => {
                  setCourseValue(e);
                }}>
                <SelectTrigger className="w-[250px] rounded-full bg-white">
                  <SelectValue placeholder="Coursework Type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Took_Essay">Tok Essay</SelectItem>
                  <SelectItem value="Extended_Essay">Extended Essay</SelectItem>
                  <SelectItem value="Internal_Assessment">Internal Assessment</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={subjectValue}
                onValueChange={(e) => {
                  setSubjectValue(e);
                }}>
                <SelectTrigger className="w-auto rounded-full bg-white">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Business_Management">Business Management</SelectItem>
                  <SelectItem value="Economics">Economics</SelectItem>
                  <SelectItem value="Language_And_Literature">Language and Literature</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <p className="text-textGrey text-[14px]">Enter your essay title*(Required) </p>
            <Input
              className="rounded-full sm:w-[70%]"
              value={essayTitle}
              onChange={(e) => {
                setEssayTitle(e.target.value);
              }}
            />
          </div>
          <div className="sm:flex sm:justify-center md:justify-start">
            <Button
              onClick={() => {
                const evaluatePdfObj = {
                  title: essayTitle,
                  subject: subjectValue,
                  course: courseValue,
                  file,
                  metadata,
                };
                pdfEvaluatedData(evaluatePdfObj);
              }}
              className="rounded-full w-full sm:w-[50%] disabled:text-white"
              disabled={!essayTitle || !subjectValue || !courseValue || !file}>
              <StarIcon color={!essayTitle || !subjectValue || !courseValue || !file ? "#808080" : undefined} disableCircle={!essayTitle || !subjectValue || !courseValue || !file ? "#ffffff" : undefined} />
              &nbsp; Evaluate your Score
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfUploader;
