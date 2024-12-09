import React from "react";
import Image from "next/image";
import Road from "../public/road.jpeg";
import Car from "../public/car.png";
import Umbrella from "../public/umbrella.png";


const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: Road,
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: Car,
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: Umbrella,
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];


export default posts;
