import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { StarIcon, UploadFileIcon } from "@/lib/icon";
import { Button } from "../ui/button";

const PdfUploader = () => {
  return (
    <div className="sm:px-4 sm:space-y-2 max-w-[45rem]">
      <p className="font-extrabold text-3xl text-wrap">
        Hey IB Folks ! Unsure about the quality of your answers? <span className="text-primary"> We get you.</span>
      </p>
      <div className="p-2 bg-white drop-shadow-sm rounded-xl md:p-4">
        <div className="border-2 border-dashed p-2 bg-white flex flex-col justify-center items-center gap-4">
          <UploadFileIcon />
          <div className="text-textGrey flex flex-col items-center">
            <p className="font-semibold">Drag and drop a PDF</p>
            <p className="text-sm">"Limit 25 MB per file"</p>
          </div>
          <Button className="bg-white hover:bg-white border-primary border rounded-full text-primary font-bold">Upload your file</Button>
        </div>
        <div className="space-y-4 py-2">
          <div>
            <p className="text-textGrey text-[14px]">Select your course & subjects*</p>
            <div className="flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-[250px] rounded-full bg-white">
                  <SelectValue placeholder="Coursework Type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Tok Essay</SelectItem>
                  <SelectItem value="dark">Extended Essay</SelectItem>
                  <SelectItem value="system">Internal Assessment</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-auto rounded-full bg-white">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Business Management</SelectItem>
                  <SelectItem value="dark">Economics</SelectItem>
                  <SelectItem value="system">Language and Literature</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <p className="text-textGrey text-[14px]">Enter your essay title*(Required) </p>
            <Input className="rounded-full sm:w-[70%]" />
          </div>
          <div className="sm:flex sm:justify-center md:justify-start">
            <Button className="rounded-full  bg-buttonDisable hover:bg-buttonDisable w-full sm:w-[50%]">
              <StarIcon />
              &nbsp; Evaluate your Score
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfUploader;
