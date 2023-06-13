import React from "react";
import AboutSection from "../Components/AboutSection";

export default function AboutPgLayout() {
  return (
    <>
      <div className="aboutpagelayout">
      <AboutSection
        name="About"
        className="aboutus"
        details=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        atque saepe ab voluptates magnam maiores iusto vitae fugit et
        dolorum placeat, temporibus officia tempore perspiciatis quis. Sit
        illo alias voluptatibus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        atque saepe ab voluptates magnam maiores iusto vitae fugit et
        dolorum placeat, temporibus officia tempore perspiciatis quis. Sit
        illo alias voluptatibus!"      
      />

       <AboutSection
        name="React"
        className="react"
        details=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        atque saepe ab voluptates magnam maiores iusto vitae fugit et
        dolorum placeat, temporibus officia tempore perspiciatis quis. Sit
        illo alias voluptatibus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        atque saepe ab voluptates magnam maiores iusto vitae fugit et
        dolorum placeat, temporibus officia tempore perspiciatis quis. Sit
        illo alias voluptatibus!"      
      />

       <AboutSection
        name="Components"
        className="components"
        details=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        atque saepe ab voluptates magnam maiores iusto vitae fugit et
        dolorum placeat, temporibus officia tempore perspiciatis quis. Sit
        illo alias voluptatibus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        atque saepe ab voluptates magnam maiores iusto vitae fugit et
        dolorum placeat, temporibus officia tempore perspiciatis quis. Sit
        illo alias voluptatibus!"      
      />
        
      </div>
    </>
  );
}
