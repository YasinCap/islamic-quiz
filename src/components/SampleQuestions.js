import React from "react";

const SampleQuestions = [
  {
    question: "Pillars of Islam are called:",
    translations: {
      english: {
        question: "Pillars of Islam are called:",
        answers: [
          "Arkanal Islam",
          "Qadr ul Islam",
          "Fi Amanillah",
          "Yusuf Islam",
        ],
      },
      dutch: {
        question: "Wat zijn de pijlers van de Islam?",
        answers: [
          "Arkanal Islam",
          "Qadr ul Islam",
          "Fi Amanillah",
          "Yusuf Islam",
        ],
      },
      turkish: {
        question: "İslamın direkleri nasıl adlandırılır?",
        answers: [
          "Arkanal Islam",
          "Qadr ul Islam",
          "Fi Amanillah",
          "Yusuf Islam",
        ],
      },
    },
    correctAnswer: "Arkanal Islam",
  },
  {
    question: "Muslims are monotheistic.",
    translations: {
      english: {
        question: "Muslims are monotheistic.",
        answers: ["True", "False"],
      },
      dutch: {
        question: "Zijn moslims monotheïstisch?",
        answers: ["Waar", "Onwaar"],
      },
      turkish: {
        question: "Müslümanlar tek tanrılıdır.",
        answers: ["Doğru", "Yanlış"],
      },
    },
    correctAnswer: "True",
  },
  {
    question: "What is the first month of the Islamic calendar?",
    translations: {
      english: {
        question: "What is the first month of the Islamic calendar?",
        answers: ["Shawwal", "Muharram", "Thul Qiddah", "Thul Hijjah"],
      },
      dutch: {
        question: "Wat is de eerste maand van de islamitische kalender?",
        answers: ["Shawwal", "Muharram", "Thul Qiddah", "Thul Hijjah"],
      },
      turkish: {
        question: "İslam takviminin ilk ayı nedir?",
        answers: ["Şevval", "Muharrem", "Thul Qiddah", "Thul Hijjah"],
      },
    },
    correctAnswer: "Muharram",
  },
  {
    question: "The Kabah is located in Makkah.",
    translations: {
      english: {
        question: "The Kabah is located in Makkah.",
        answers: ["True", "False"],
      },
      dutch: {
        question: "De Kabah bevindt zich in Mekka.",
        answers: ["Waar", "Onwaar"],
      },
      turkish: {
        question: "Kabe Mekke'de bulunur.",
        answers: ["Doğru", "Yanlış"],
      },
    },
    correctAnswer: "True",
  },
  // Add more questions here
];

export default SampleQuestions;
