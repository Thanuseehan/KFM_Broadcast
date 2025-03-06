import React, { useState } from "react";
import { TimerProvider, useTimer } from "./TimerContext"; // Ensure correct path

const samplePlayers = [
  {
    key: 1,
    playerName: "K Dilakshan",
    playerType: "All Rounder",
    age: 29,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Western Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k1.jpg",
  },
  {
    key: 2,
    playerName: "C Sanjai",
    playerType: "Batsman",
    age: 23,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Western Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k2.png",
  },
  {
    key: 6,
    playerName: "Karshan",
    playerType: "All Rounder",
    age: 29,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k6.png",
  },
  {
    key: 7,
    playerName: "Sam",
    playerType: "All Rounder",
    age: 25,
    basePrice: 1600,
    battingStyle: "Left-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k7.png",
  },
  {
    key: 8,
    playerName: "Krishna",
    playerType: "All Rounder",
    age: 27,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k8.png",
  },
  {
    key: 9,
    playerName: "Rujithan",
    playerType: "Batsman",
    age: 24,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "N/A",
    imageUrl: "./images/k9.png",
  },{
    key: 10,
    playerName: "Thivash",
    playerType: "Batsman",
    age: 24,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Young Rovers",
    previousTournament: "N/A",
    imageUrl: "./images/k10.png",
  },
  {
    key: 11,
    playerName: "Pavitharan",
    playerType: "Bowler",
    age: 17,
    basePrice: 1000,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "N/A",
    imageUrl: "./images/k11.png",
  },
  {
    key: 12,
    playerName: "M Paviraj",
    playerType: "All Rounder",
    age: 35,
    basePrice: 6000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k12.png", // done
  },
  {
    key: 13,
    playerName: "S Kajinthiran",
    playerType: "All Rounder",
    age: 36,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k13.png",
  },
  {
    key: 14,
    playerName: "Vinupavan",
    playerType: "Batsman",
    age: 28,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "Cric Breath 2024",
    imageUrl: "./images/k14.png",
  },{
    key: 15,
    playerName: "K Rokith",
    playerType: "Batsman",
    age: 17,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k15.png",
  },{
    key: 16,
    playerName: "A Kemaraj",
    playerType: "Batsman",
    age: 21,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "Cric Breath 2024",
    imageUrl: "./images/k16.png",
  },{
    key: 17,
    playerName: "G Sanujan",
    playerType: "Batsman",
    age: 22,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k17.png",
  },{
    key: 18,
    playerName: "Mathujan",
    playerType: "Batsman",
    age: 23,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k18.png",
  },{
    key: 19,
    playerName: "Kovi",
    playerType: "Batsman",
    age: 21,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k19.png",
  },{
    key: 20,
    playerName: "Karishrathan",
    playerType: "Batsman",
    age: 25,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k20.png",
  },{
    key: 21,
    playerName: "Jenu",
    playerType: "All Rounder",
    age: 28, //need to change
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k21.png",
  },{
    key: 24,
    playerName: "Sajeev",
    playerType: "Bowler",
    age: 39, //need to change
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k24.png",
  },{
    key: 26,
    playerName: "Loveshan",
    playerType: "Batsman",
    age: 23,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k26.png",
  },{
    key: 27,
    playerName: "Dhushanth",
    playerType: "Bowler",
    age: 40,
    basePrice: 1200,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k27.png",
  },{
    key: 28,
    playerName: "Kirishanth",
    playerType: "All Rounder",
    age: 34,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k28.png",
  },{
    key: 31,
    playerName: "T Sureshkumar",
    playerType: "Batsman ",
    age: 41,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Kavery Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k31.png",
  },{
    key: 33,
    playerName: "Krishanthan",
    playerType: "All Rounder ",
    age: 27,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Kavery Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k33.png",
  },{
    key: 34,
    playerName: "T Kathurshan",
    playerType: "Batsman",
    age: 20,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Golden Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k34.png",
  },{
    key: 35,
    playerName: "K Pithurshan",
    playerType: "All Rounder",
    age: 23,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Golden Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k35.png",
  },{
    key: 36,
    playerName: "V sathees",
    playerType: "Bowler",
    age: 21,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Golden Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k36.png",
  },{
    key: 37,
    playerName: "J Sakeethan",
    playerType: "Batsman",
    age: 28,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "ST - Joshep Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k37.png",
  },{
    key: 38,
    playerName: "D Vithukshan",
    playerType: "All Rounder",
    age: 21,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "ST - Joshep Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k38.png",
  },{
    key: 40,
    playerName: "A Lorinton",
    playerType: "Bowler",
    age: 37,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "ST - Joshep Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k40.png",
  },{
    key: 41,
    playerName: "J Paranishanth",
    playerType: "All Rounder",
    age: 25,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Super Star Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k41.png",
  },{
    key: 43,
    playerName: "M M Indika",
    playerType: "All Rounder",
    age: 27,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Royal Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k43.png",
  },{
    key: 44,
    playerName: "P Hurman",
    playerType: "All Rounder",
    age: 20,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Royal Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k44.png",
  },{
    key: 45,
    playerName: "S Sujei",
    playerType: "Batsman",
    age: 35,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Royal Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k45.png",
  },{
    key: 46,
    playerName: "P Tharshan",
    playerType: "All Rounder",
    age: 26,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Royal Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k46.png",
  },{
    key: 47,
    playerName: "S Harishoth",
    playerType: "Batsman",
    age: 28,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Royal Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k47.png",
  },{
    key: 48,
    playerName: "V kishentharaj",
    playerType: "All Rounder",
    age: 29,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Youth Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k48.png",
  },
  {
    key: 50,
    playerName: "Rishi",
    playerType: "Batsman",
    age: 21,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Youth Sports Club",
    previousTournament: "KIMA 2024",
    imageUrl: "./images/k50.png",
  },{
    key: 51,
    playerName: "Rishanth",
    playerType: "Batsman",
    age: 25,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Youth Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k51.png",
  },{
    key: 52,
    playerName: "Prathees",
    playerType: "Batsman",
    age: 34,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Youth Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k52.png",
  },{
    key: 53,
    playerName: "V Karan",
    playerType: "All Rounder",
    age: 22,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k53.png",
  },{
    key: 54,
    playerName: "T Sanoson",
    playerType: "All Rounder",
    age: 24,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k54.png",
  },{
    key: 55,
    playerName: "G Nathison",
    playerType: "All Rounder",
    age: 18,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k55.png",
  },{
    key: 56,
    playerName: "Rangan",
    playerType: "Batsman",
    age: 36,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k56.png",
  },{
    key: 57,
    playerName: "T Kanna",
    playerType: "Batsman",
    age: 36,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k57.png",
  },{
    key: 58,
    playerName: "T Shesan",
    playerType: "Bowler",
    age: 18,
    basePrice: 1000,
    battingStyle: "",
    bowlingStyle: "N/A",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k58.png",
  },{
    key: 60,
    playerName: "S Abishanth",
    playerType: "All Rounder",
    age: 23,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Challengers Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k60.png",
  },{
    key: 62,
    playerName: "T Jeyahanth",
    playerType: "All Rounder",
    age: 41,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Shining Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k62.png",
  },{
    key: 63,
    playerName: "K Laxanth",
    playerType: "Bowler",
    age: 31,
    basePrice: 1500,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Shining Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k63.png",
  },{
    key: 64,
    playerName: "S Umakaran",
    playerType: "All Rounder",
    age: 37,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k64.png",
  },{
    key: 65,
    playerName: "Y Kobishan",
    playerType: "All Rounder",
    age: 23,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k65.png",
  },{
    key: 66,
    playerName: "G Sharujan",
    playerType: "All Rounder",
    age: 27,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k66.png",
  },{
    key: 67,
    playerName: "Kana",
    playerType: "Batsman",
    age: 27,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k67.png",
  },{
    key: 69,
    playerName: "A H Sajeevan",
    playerType: "Batsman",
    age: 36,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k69.png",
  },{
    key: 71,
    playerName: "Dinojan",
    playerType: "Batsman",
    age: 22,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k71.png",
  },{
    key: 72,
    playerName: "K Kajan",
    playerType: "Batsman",
    age: 36,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Dolphin Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k72.png",
  },{
    key: 74,
    playerName: "Dhanushan",
    playerType: "Batsman",
    age: 21,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Dolphin Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/kunkown.jpg",

  },{
    key: 76,
    playerName: "Pergus",
    playerType: "Bowler",
    age: 37,
    basePrice: 1200,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Dolphin Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k76.png",
  },{
    key: 78,
    playerName: "P Aagash",
    playerType: "Bowler",
    age: 23,
    basePrice: 1200,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Winner Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k78.png",
  },{
    key: 79,
    playerName: "S Rusrtharan",
    playerType: "All Rounder",
    age: 32,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Winner Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k79.png",
  },{
    key: 80,
    playerName: "V Dharsan",
    playerType: "Bowler",
    age: 21,
    basePrice: 1600,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Winner Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k80.png",
  },{
    key: 81,
    playerName: "P Kobisan",
    playerType: "Batsman",
    age: 26,
    basePrice: 1500,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k81.png",
  },{
    key: 82,
    playerName: "L Arankumar",
    playerType: "All Rounder",
    age: 21,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k82.png",
  },{
    key: 83,
    playerName: "S Ajithraj",
    playerType: "Batsman",
    age: 30,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k83.png",
  },{
    key: 84,
    playerName: "S Vithusan",
    playerType: "Batsman",
    age: 30,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k84.png",
  },{
    key: 85,
    playerName: "S Ramesh",
    playerType: "All Rounder",
    age: 40,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k85.png",
  },{
    key: 86,
    playerName: "V Sahan",
    playerType: "Batsman",
    age: 29,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k86.png",
  },{
    key: 88,
    playerName: "N Nirosh",
    playerType: "All Rounder",
    age: 26,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Vivekanantha Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k88.png",
  },{
    key: 89,
    playerName: "A Satheeskumar",
    playerType: "All Rounder",
    age: 26,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k89.png",
  },{
    key: 90,
    playerName: "N Dilakshan",
    playerType: "Batsman",
    age: 28,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k90.png",
  },{
    key: 91,
    playerName: "P Lakshan",
    playerType: "Batsman",
    age: 21,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k91.png",
  },{
    key: 92,
    playerName: "S shanjai",
    playerType: "Bowler",
    age: 23,
    basePrice: 1000,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k92.png",
  },{
    key: 93,
    playerName: "K Thushanthan",
    playerType: "Bowler",
    age: 21,
    basePrice: 1200,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k93.png",
  },{
    key: 94,
    playerName: "T Lakshan",
    playerType: "Bowler",
    age: 32,
    basePrice: 1500,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KIMA 2024",
    imageUrl: "./images/k94.png",
  },{
    key: 95,
    playerName: "K Nithushan",
    playerType: "Batsman",
    age: 23,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KIMA 2024",
    imageUrl: "./images/k95.png",
  },
  {
    key: 96,
    playerName: "R Mathu",
    playerType: "Batsman",
    age: 36,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k96.png",
  },{
    key: 97,
    playerName: "R Kithushan",
    playerType: "Bowler",
    age: 36,
    basePrice: 1600,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k97.png",
  },{
    key: 98,
    playerName: "T Kobiraj",
    playerType: "Bowler",
    age: 32,
    basePrice: 1500,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k98.png",
  },{
    key: 99,
    playerName: "P Mithurshan",
    playerType: "Batsman",
    age: 30,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k99.png",
  },
  {
    key: 100,
    playerName: "P Logan",
    playerType: "Batsman",
    age: 23,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k100.png",
  },{
    key: 101,
    playerName: "T Rukshan",
    playerType: "Batsman",
    age: 28,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k101.png",
  },
  {
    key: 102,
    playerName: "R Abishek",
    playerType: "Batsman",
    age: 27,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Ganthy \"G\" Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/kunkown.jpg",
  },{
    key: 103,
    playerName: "M M Dhammika",
    playerType: "All Rounder",
    age: 25,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Newpower Star \"K\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k103.png",
  },{
    key: 104,
    playerName: "R Dithurshan",
    playerType: "All Rounder",
    age: 24,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Newpower Star \"K\" Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k104.png",
  },{
    key: 105,
    playerName: "N Mithursan",
    playerType: "Bowler",
    age: 24,
    basePrice: 1000,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Newpower Star \"K\" Sports Club",
    previousTournament: "KIMA 2024",
    imageUrl: "./images/k105.png",
  },{
    key: 106,
    playerName: "M B Arokiyanathan",
    playerType: "Bowler",
    age: 43,
    basePrice: 1500,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Newpower Star \"K\" Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k106.png",
  },{
    key: 107,
    playerName: "Sujeilan",
    playerType: "Bowler",
    age: 30,
    basePrice: 1000,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "New Star - Che Sports Club",
    previousTournament: "N/A",
    imageUrl: "./images/k107.png",
  },{
    key: 109,
    playerName: "K Anujan",
    playerType: "All Rounder",
    age: 23,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Everst S.T Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k109.png",
  },{
    key: 110,
    playerName: "M Nithushan",
    playerType: "Batsman",
    age: 22,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Everst S.T Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k110.png",
  },{
    key: 111,
    playerName: "U Thajeevan",
    playerType: "All Rounder",
    age: 28,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Thulir Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k111.png",
  },{
    key: 113,
    playerName: "S Rejinold",
    playerType: "All Rounder",
    age: 40,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Thulir Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k113.png",
  },{
    key: 114,
    playerName: "T Sajee",
    playerType: "All Rounder",
    age: 39,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Thulir Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k114.png",
  },{
    key: 115,
    playerName: "T Bala",
    playerType: "Bowler",
    age: 46,
    basePrice: 1500,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Thulir Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/k115.png",
  },


];

const ControlPanel = () => {
  const [formData, setFormData] = useState({
    key: "",
    playerName: "",
    playerType: "",
    age: "",
    basePrice: "",
    battingStyle: "",
    bowlingStyle: "",
    originTeam: "",
    previousTournament: "",
    imageUrl: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(samplePlayers);
  const [selectedValue, setSelectedValue] = useState("");

  const { time, timerRunning, startTimer, stopTimer, resetTimer } = useTimer();
  

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = samplePlayers.filter((player) =>
      player.playerName.toLowerCase().includes(term)
    );
    setFilteredPlayers(filtered);
  };

  const handleSelectPlayer = (player) => {
    setFormData(player);
    setSearchTerm(player.playerName);
    setFilteredPlayers([]);
  };

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  


  return (
    <div className="wrapper">
      {/* Player Info Container */}
      <div className="container">
        <h2>Player Details</h2>

        {/* Live Search */}
        <input
          type="text"
          placeholder="Search Player..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-box"
        />

        {/* Search Results */}
        {searchTerm && (
          <ul className="search-results">
            {filteredPlayers.map((player) => (
              <li key={player.key} onClick={() => handleSelectPlayer(player)}>
                {player.playerName} - {player.playerType}
              </li>
            ))}
          </ul>
        )}

        {/* Player Form (Read-Only Fields) */}
        <form className="form">
          {Object.keys(formData).map(
            (field, index) =>
              field !== "imageUrl" && (
                <div className="form-group" key={index}>
                  <label>{field.replace(/([A-Z])/g, " $1").trim()}:</label>
                  <input type="text" value={formData[field]} disabled />
                </div>
              )
          )}

          {/* Image Preview */}
          {formData.imageUrl && (
            <div className="form-group">
              <label>Player Image:</label>
              <img src={formData.imageUrl} alt="Preview" className="preview-img" />
              <button className="display-button">Display</button>

            </div>
            
          )}
        </form>
      </div>



     
      <div className="dropdown-row">
  {/* First Dropdown Container */}
  <div className="dropdown-container">
    <h3>Adding Points</h3>
    <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
      <option value="">Select</option>
    </select>
    <div className="button-group">
      {[1000, 2000, 3000, 5000].map((val) => (
        <button key={val} type="button" onClick={() => handleButtonClick(val)}>
          {val}
        </button>
      ))}
    </div>
    <button className="add-button">Add</button>
  </div>

  {/* Second Dropdown Container */}
  <div className="dropdown-container">
  <h3>Price</h3>
  
  {/* Dropdown */}
 

  {/* Value Buttons */}
  <div className="button-group">
    {[50, 100, 200, 500, 1000].map((val) => (
      <button key={val} type="button" onClick={() => handleButtonClick(val)}>
        {val}
      </button>
    ))}
  </div>

    {/* Extra 6 Buttons */}
    <div className="button-group">
      {["Kirthik", "AL", "Romish", "Adrian", "Dinesh 11", "Vinayakar"].map((label, index) => (
        <button key={index} type="button" onClick={() => /*handleExtraButtonClick*/(label)}>
          {label}
        </button>
      ))}
    </div>



    {/* Add Button */}
    <button className="add-button">Add</button>
  </div>

{/* third Dropdown Container */}
  <div className="dropdown-container">
      
      <div className="status-container">
        <label>Status:</label>
        <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="">Select</option>
        </select>
        <div >
          <button className="add-button">Sold</button>
          <button className="add-button">Unsold</button>
        </div>
      </div>


      
  

    </div>

    {/* Timer Section */}
    <div className="dropdown-container">
          <label>Timer: {time} seconds</label>
          <div className="timer-buttons">
            <button className="add-button" onClick={startTimer} disabled={timerRunning}>
              Start
            </button>
            <button className="add-button" onClick={stopTimer}>End</button>
            <button className="add-button" onClick={resetTimer}>Reset</button>
          </div>
        </div>
    
    </div>





      <style>
        {`
          .wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 20px;
          }

          .container {
            max-width: 350px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            margin-right: 20px;
          }

          h2 {
            text-align: center;
          }

          .search-box {
            width: 100%;
            padding: 6px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .search-results {
            list-style: none;
            padding: 0;
            max-height: auto;
            max-width:10px /* Reduced height */
            overflow-y: auto;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 4px;
            background: white;
            position: absolute;
            width: 20%;
            z-index: 1;
            font-size: 12px; /* Smaller font */
          }

          .search-results li {
            padding: 4px; /* Less padding */
            cursor: pointer;
            font-size: 12px; /* Reduced text size */
          }

          .search-results li:hover {
            background-color: #f0f0f0;
          }



          .form {
            display: flex;
            flex-direction: column;
          }

          .form-group {
            margin-bottom: 8px;
          }

          label {
            font-size: 14px;
            font-weight: bold;
          }

          input {
            width: 100%;
            padding: 5px;
            font-size: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f5f5f5;
            cursor: not-allowed;
          }

          .preview-img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-top: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }

          /* Dropdown Section */
          .dropdown-container {
            max-width: auto;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
            text-align: center;
          }

          select {
            width: 100%;
            padding: 6px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .button-group {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
          }

          .button-group button {
            flex: 1;
            margin: 0 5px;
            padding: 6px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
          }

          .button-group button:hover {
            background-color: #0056b3;
          }
            
          .select-button {
            flex: 1;
            margin: 0 5px;
            padding: 6px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            transition: 0.2s ease;
          }

          .select-button:hover {
            background-color: #0056b3;
          }

          .select-button.active {
            background-color: #28a745; /* Green for selected button */
          }

          .add-button,
          .display-button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            border: none;
            border-radius: 4px;
            background-color: #28a745;
            color: white;
            cursor: pointer;
          }

          .display-button {
            background-color: #17a2b8;
          }

          .add-button:hover {
            background-color: #218838;
          }

          .display-button:hover {
            background-color: #138496;
          }
        `}
      </style>
    </div>
  );
};
const App = () => (
  <TimerProvider>
    <ControlPanel />
  </TimerProvider>
);

export default ControlPanel;
