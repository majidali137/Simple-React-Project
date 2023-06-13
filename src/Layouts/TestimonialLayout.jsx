import React from "react";
import "../assets/styles/pages/testimonial.scss";
import Testimonial from "../Components/Testimonial";

export default function TestimonialLayout() {
  return (
    <>
      <div className="testimonial">
        <h2> Testimonials</h2>
        <div className="testimonialDisplay">
          <Testimonial
            name="Majid Ali"
            profession="web developer"
            review="No one is better than John Doe.Lorem ipsum, 
            dolor sit consectetur adipisicing elit Beatae atque 
            saepe ab voluptates magnam maiores iusto vitae fugit
             et dolorum placeat"
          />

          <Testimonial
            name="Majid Ali"
            profession="web developer"
            review="No one is better than John Doe.Lorem ipsum, 
            dolor sit consectetur adipisicing elit Beatae atque 
            saepe ab voluptates magnam maiores iusto vitae fugit 
            et dolorum placeat"
          />

          <Testimonial
            name="Majid Ali"
            profession="web developer"
            review="No one is better than John Doe.Lorem ipsum, 
            dolor sit consectetur adipisicing elit Beatae atque 
            saepe ab voluptates magnam maiores iusto vitae fugit"
          />

          <Testimonial
            name="Majid Ali"
            profession="web developer"
            review="No one is better than John Doe.Lorem ipsum,
             dolor sit consectetur adipisicing elit Beatae atque
              saepe ab voluptates magnam maiores iusto vitae fugit"
          />
        </div>
      </div>
    </>
  );
}
