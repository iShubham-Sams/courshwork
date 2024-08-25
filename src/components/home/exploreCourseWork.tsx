import React from "react";
import Course from "./course";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courseDummy = {
  pdfUrl: "/dummy.pdf",
  id: 5666,
  pdfFileTitle: "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
  subject: "English",
  title: "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
  value: "Physics HL",
};
const ExploreCourseWork = () => {
  return (
    <div className="space-y-2">
      <p className="text-[14px] text-textGrey">Explore coursework</p>
      <Tabs defaultValue="all">
        <TabsList className="flex-wrap h-full justify-start gap-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ai">IA Example</TabsTrigger>
          <TabsTrigger value="ee">EE Example</TabsTrigger>
          <TabsTrigger value="io">IO Example</TabsTrigger>
          <TabsTrigger value="tok">Tok Example</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2  gap-2">
            {[1, 2, 3, 4]?.map((val) => {
              return <Course data={courseDummy} key={val} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="ai">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2  gap-2">
            {[1, 2, 3, 4]?.map((val) => {
              return <Course data={courseDummy} key={val} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="ee">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2  gap-2">
            {[1, 2, 3, 4]?.map((val) => {
              return <Course data={courseDummy} key={val} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="io">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2  gap-2">
            {[1, 2, 3, 4]?.map((val) => {
              return <Course data={courseDummy} key={val} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="tok">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2  gap-2">
            {[1, 2, 3, 4]?.map((val) => {
              return <Course data={courseDummy} key={courseDummy.id} />;
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExploreCourseWork;
