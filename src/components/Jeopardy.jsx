import React, { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import clickSound from "./clickSound.mp3";
import correctSound from "./correctSound.mp3";
import wrongSound from "./wrongSound.mp3";
import "../App.css";


    const categories = [
      {
        "American Government": [
          {
            "question": "What is the supreme law of the land?",
            "answer": "The Constitution",
            "points": 100
          },
          {
            "question": "What does the Constitution do?",
            "answer": "Sets up the government; defines the government; protects basic rights of Americans",
            "points": 200
          },
          {
            "question": "The idea of self-government is in the first three words of the Constitution. What are these words?",
            "answer": "We the People",
            "points": 300
          },
          {
            "question": "What is an amendment?",
            "answer": "A change (to the Constitution); an addition (to the Constitution)",
            "points": 400
          },
          {
            "question": "What do we call the first ten amendments to the Constitution?",
            "answer": "The Bill of Rights",
            "points": 500
          },
          {
            "question": "What is one right or freedom from the First Amendment?",
            "answer": "Speech; religion; assembly; press; petition the government",
            "points": 600
          },
          {
            "question": "How many amendments does the Constitution have?",
            "answer": "Twenty-seven (27)",
            "points": 700
          },
          {
            "question": "What did the Declaration of Independence do?",
            "answer": "Announced our independence (from Great Britain); declared our independence (from Great Britain); said that the United States is free (from Great Britain)",
            "points": 800
          },
          {
            "question": "What are two rights in the Declaration of Independence?",
            "answer": "Life; liberty; pursuit of happiness",
            "points": 900
          },
          {
            "question": "What is freedom of religion?",
            "answer": "You can practice any religion, or not practice a religion",
            "points": 1000
          }
        ],
        "System of Government": [
          {
            "question": "Name one branch or part of the government.",
            "answer": "Congress; legislative; President; executive; the courts; judicial",
            "points": 100
          },
          {
            "question": "What stops one branch of government from becoming too powerful?",
            "answer": "Checks and balances; separation of powers",
            "points": 200
          },
          {
            "question": "Who is in charge of the executive branch?",
            "answer": "The President",
            "points": 300
          },
          {
            "question": "Who makes federal laws?",
            "answer": "Congress; Senate and House (of Representatives); (U.S. or national) legislature",
            "points": 400
          },
          {
            "question": "What are the two parts of the U.S. Congress?",
            "answer": "The Senate and House (of Representatives)",
            "points": 500
          },
          {
            "question": "How many U.S. Senators are there?",
            "answer": "One hundred (100)",
            "points": 600
          },
          {
            "question": "We elect a U.S. Senator for how many years?",
            "answer": "Six (6)",
            "points": 700
          },
          {
            "question": "The House of Representatives has how many voting members?",
            "answer": "Four hundred thirty-five (435)",
            "points": 800
          },
          {
            "question": "We elect a U.S. Representative for how many years?",
            "answer": "Two (2)",
            "points": 900
          },
          {
            "question": "Who does a U.S. Senator represent?",
            "answer": "All people of the state",
            "points": 1000
          }
        ],
        "Rights and Responsibilities": [
          {
            "question": "There are four amendments to the Constitution about who can vote. Describe one of them.",
            "answer": "Citizens eighteen (18) and older (can vote); You don't have to pay (a poll tax) to vote; Any citizen can vote (Women and men can vote); A male citizen of any race (can vote)",
            "points": 100
          },
          {
            "question": "What is one responsibility that is only for United States citizens?",
            "answer": "Serve on a jury; vote in a federal election",
            "points": 200
          },
          {
            "question": "Name one right only for United States citizens.",
            "answer": "Vote in a federal election; run for federal office",
            "points": 300
          },
          {
            "question": "What are two rights of everyone living in the United States?",
            "answer": "Freedom of expression; freedom of speech; freedom of assembly; freedom to petition the government; freedom of religion; the right to bear arms",
            "points": 400
          },
          {
            "question": "What do we show loyalty to when we say the Pledge of Allegiance?",
            "answer": "The United States; the flag",
            "points": 500
          },
          {
            "question": "What is one promise you make when you become a United States citizen?",
            "answer": "Give up loyalty to other countries; defend the Constitution and laws of the United States; obey the laws of the United States; serve in the U.S. military (if needed); serve (do important work for) the nation (if needed); be loyal to the United States",
            "points": 600
          },
          {
            "question": "How old do citizens have to be to vote for President?",
            "answer": "Eighteen (18) and older",
            "points": 700
          },
          {
            "question": "What are two ways that Americans can participate in their democracy?",
            "answer": "Vote; join a political party; help with a campaign; join a civic group; join a community group; give an elected official your opinion on an issue; call Senators and Representatives; publicly support or oppose an issue or policy; run for office; write to a newspaper",
            "points": 800
          },
          {
            "question": "When is the last day you can send in federal income tax forms?",
            "answer": "April 15",
            "points": 900
          },
          {
            "question": "When must all men register for the Selective Service?",
            "answer": "At age eighteen (18); between eighteen (18) and twenty-six (26)",
            "points": 1000
          }
        ],
        "Colonial Period / Independence": [
          {
            "question": "What is one reason colonists came to America?",
            "answer": "Freedom; political liberty; religious freedom; economic opportunity; practice their religion; escape persecution",
            "points": 100
          },
          {
            "question": "Who lived in America before the Europeans arrived?",
            "answer": "American Indians; Native Americans",
            "points": 200
          },
          {
            "question": "What group of people was taken to America and sold as slaves?",
            "answer": "Africans; people from Africa",
            "points": 300
          },
          {
            "question": "Why did the colonists fight the British?",
            "answer": "Because of high taxes (taxation without representation); because the British army stayed in their houses (boarding, quartering); because they didn't have self-government",
            "points": 400
          },
          {
            "question": "Who wrote the Declaration of Independence?",
            "answer": "(Thomas) Jefferson",
            "points": 500
          },
          {
            "question": "When was the Declaration of Independence adopted?",
            "answer": "July 4, 1776",
            "points": 600
          },
          {
            "question": "There were 13 original states. Name three.",
            "answer": "New Hampshire; Massachusetts; Rhode Island; Connecticut; New York; New Jersey; Pennsylvania; Delaware; Maryland; Virginia; North Carolina; South Carolina; Georgia",
            "points": 700
          },
          {
            "question": "What happened at the Constitutional Convention?",
            "answer": "The Constitution was written; The Founding Fathers wrote the Constitution",
            "points": 800
          },
          {
            "question": "When was the Constitution written?",
            "answer": "1787",
            "points": 900
          },
          {
            "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
            "answer": "(James) Madison; (Alexander) Hamilton; (John) Jay; Publius",
            "points": 1000
          }
        ],
        "1800s in US History": [
          {
            "question": "What territory did the United States buy from France in 1803?",
            "answer": "The Louisiana Territory; Louisiana",
            "points": 100
          },
          {
            "question": "Name one war fought by the United States in the 1800s.",
            "answer": "War of 1812; Mexican-American War; Civil War; Spanish-American War",
            "points": 200
          },
          {
            "question": "Name the U.S. war between the North and the South.",
            "answer": "The Civil War; the War between the States",
            "points": 300
          },
          {
            "question": "Name one problem that led to the Civil War.",
            "answer": "Slavery; economic reasons; states' rights",
            "points": 400
          },
          {
            "question": "What was one important thing that Abraham Lincoln did?",
            "answer": "Freed the slaves (Emancipation Proclamation); saved (or preserved) the Union; led the United States during the Civil War",
            "points": 500
          },
          {
            "question": "What did the Emancipation Proclamation do?",
            "answer": "Freed the slaves; freed slaves in the Confederacy; freed slaves in the Confederate states; freed slaves in most Southern states",
            "points": 600
          },
          {
            "question": "What did Susan B. Anthony do?",
            "answer": "Fought for women's rights; fought for civil rights",
            "points": 700
          },
          {
            "question": "Name one war fought by the United States in the 1900s.",
            "answer": "World War I; World War II; Korean War; Vietnam War; (Persian) Gulf War",
            "points": 800
          },
          {
            "question": "Who was President during World War I?",
            "answer": "(Woodrow) Wilson",
            "points": 900
          },
          {
            "question": "Who was President during the Great Depression and World War II?",
            "answer": "(Franklin) Roosevelt",
            "points": 1000
          }
        ],
        "Recent United States History": [
          {
            "question": "Who did the United States fight in World War II?",
            "answer": "Japan, Germany, and Italy",
            "points": 100
          },
          {
            "question": "Before he was President, Eisenhower was a general. What war was he in?",
            "answer": "World War II",
            "points": 200
          },
          {
            "question": "During the Cold War, what was the main concern of the United States?",
            "answer": "Communism",
            "points": 300
          },
          {
            "question": "What movement tried to end racial discrimination?",
            "answer": "Civil rights (movement)",
            "points": 400
          },
          {
            "question": "What did Martin Luther King, Jr. do?",
            "answer": "Fought for civil rights; worked for equality for all Americans",
            "points": 500
          },
          {
            "question": "What major event happened on September 11, 2001, in the United States?",
            "answer": "Terrorists attacked the United States",
            "points": 600
          },
          {
            "question": "Name one American Indian tribe in the United States.",
            "answer": "Cherokee; Navajo; Sioux; Chippewa; Choctaw; Pueblo; Apache; Iroquois; Creek; Blackfeet; Seminole; Cheyenne; Arawak; Shawnee; Mohegan; Huron; Oneida; Lakota; Crow; Teton; Hopi; Inuit",
            "points": 700
          },
        ],
        "Geography of United States": [
        {
          "question": "Name one of the two longest rivers in the United States.",
          "answer": "Missouri (River); Mississippi (River)",
          "points": 100
        },
        {
          "question": "What ocean is on the West Coast of the United States?",
          "answer": "Pacific Ocean",
          "points": 200
        },
        {
          "question": "What ocean is on the East Coast of the United States?",
          "answer": "Atlantic Ocean",
          "points": 300
        },
        {
          "question": "Name one U.S. territory.",
          "answer": "Puerto Rico; U.S. Virgin Islands; American Samoa; Northern Mariana Islands; Guam",
          "points": 400
        },
        {
          "question": "Name one state that borders Canada.",
          "answer": "Maine; New Hampshire; Vermont; New York; Pennsylvania; Ohio; Michigan; Minnesota; North Dakota; Montana; Idaho; Washington; Alaska",
          "points": 500
        },
        {
          "question": "Name one state that borders Mexico.",
          "answer": "California; Arizona; New Mexico; Texas",
          "points": 600
        },
        {
          "question": "What is the capital of the United States?",
          "answer": "Washington, D.C.",
          "points": 700
        },
        {
          "question": "Where is the Statue of Liberty?",
          "answer": "New York (Harbor); Liberty Island",
          "points": 800
        }
      ],
      "Symbols and Holidays": [
        {
          "question": "Why does the flag have 13 stripes?",
          "answer": "Because there were 13 original colonies; because the stripes represent the original colonies",
          "points": 100
        },
        {
          "question": "Why does the flag have 50 stars?",
          "answer": "Because there is one star for each state; because each star represents a state; because there are 50 states",
          "points": 200
        },
        {
          "question": "What is the name of the national anthem?",
          "answer": "The Star-Spangled Banner",
          "points": 300
        },
        {
          "question": "When do we celebrate Independence Day?",
          "answer": "July 4",
          "points": 400
        },
        {
          "question": "Name two national U.S. holidays.",
          "answer": "New Year's Day; Martin Luther King, Jr. Day; Presidents' Day; Memorial Day; Independence Day; Labor Day; Columbus Day; Veterans Day; Thanksgiving; Christmas",
          "points": 500
        }
      ],
      
        "Additional Questions": [
          {
            "question": "What is the name of the President of the United States now?",
            "answer": "The answer to this question changes with elections. As of January 2025, this information would need to be updated based on the most recent election results.",
            "points": 100
          },
          {
            "question": "What is the name of the Vice President of the United States now?",
            "answer": "The answer to this question changes with elections. As of January 2025, this information would need to be updated based on the most recent election results.",
            "points": 200
          },
          {
            "question": "What is the political party of the President now?",
            "answer": "The answer to this question changes with elections. As of January 2025, this information would need to be updated based on the most recent election results.",
            "points": 300
          },
          {
            "question": "What is the name of the Speaker of the House of Representatives now?",
            "answer": "The answer to this question changes with elections and appointments. As of January 2025, this information would need to be updated based on the most recent congressional leadership.",
            "points": 400
          },
          {
            "question": "Who is the Chief Justice of the United States now?",
            "answer": "The answer to this question changes with appointments. As of January 2025, this information would need to be updated based on the most recent Supreme Court appointments.",
            "points": 500
          },
          {
            "question": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
            "answer": "To print money; to declare war; to create an army; to make treaties",
            "points": 600
          },
          {
            "question": "Under our Constitution, some powers belong to the states. What is one power of the states?",
            "answer": "Provide schooling and education; provide protection (police); provide safety (fire departments); give a driver's license; approve zoning and land use",
            "points": 700
          },
          {
            "question": "Who is the Governor of your state now?",
            "answer": "Answers vary by state. As of January 2025, this information would need to be updated based on the most recent state elections.",
            "points": 800
          },
          {
            "question": "What is the capital of your state?",
            "answer": "Answers vary by state.",
            "points": 900
          },
          {
            "question": "What are the two major political parties in the United States?",
            "answer": "Democratic and Republican",
            "points": 1000
          }
        ],
        
          "U.S. Government Basics": [
            {
              "question": "What is the economic system in the United States?",
              "answer": "capitalist economy, market economy",
              "points": 100
            },
            {
              "question": "What is the 'rule of law'?",
              "answer": "Everyone must follow the law. Leaders must obey the law. Government must obey the law. No one is above the law.",
              "points": 200
            },
            {
              "question": "Who is one of your state’s U.S. Senators now?",
              "answer": "Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]",
              "points": 300
            },
            {
              "question": "Name your U.S. Representative.",
              "answer": "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.]",
              "points": 400
            },
            {
              "question": "Why do some states have more Representatives than other states?",
              "answer": "(because of) the state’s population, (because) they have more people, (because) some states have more people",
              "points": 500
            },
            {
              "question": "We elect a President for how many years?",
              "answer": "four (4)",
              "points": 600
            },
            {
              "question": "In what month do we vote for President?",
              "answer": "November",
              "points": 700
            },
            {
              "question": "If the President can no longer serve, who becomes President?",
              "answer": "the Vice President",
              "points": 800
            },
            {
              "question": "If both the President and the Vice President can no longer serve, who becomes President?",
              "answer": "the Speaker of the House",
              "points": 900
            },
            {
              "question": "Who is the Commander in Chief of the military?",
              "answer": "the President",
              "points": 1000
            }
          ],
          "U.S. History and Leadership": [
            {
              "question": "Who signs bills to become laws?",
              "answer": "the President",
              "points": 100
            },
            {
              "question": "Who vetoes bills?",
              "answer": "the President",
              "points": 200
            },
            {
              "question": "What does the President’s Cabinet do?",
              "answer": "advises the President",
              "points": 300
            },
            {
              "question": "What are two Cabinet-level positions?",
              "answer": "Secretary of Agriculture, Secretary of Commerce, Secretary of Defense, Secretary of Education, Secretary of Energy, Secretary of Health and Human Services, Secretary of Homeland Security, Secretary of Housing and Urban Development, Secretary of the Interior, Secretary of Labor, Secretary of State, Secretary of Transportation, Secretary of the Treasury, Secretary of Veterans Affairs, Attorney General, Vice President",
              "points": 400
            },
            {
              "question": "What does the judicial branch do?",
              "answer": "reviews laws, explains laws, resolves disputes (disagreements), decides if a law goes against the Constitution",
              "points": 500
            },
            {
              "question": "What is the highest court in the United States?",
              "answer": "the Supreme Court",
              "points": 600
            },
            {
              "question": "How many justices are on the Supreme Court?",
              "answer": "Visit uscis.gov/citizenship/testupdates for the number of justices on the Supreme Court.",
              "points": 700
            },
            {
              "question": "What is one thing Benjamin Franklin is famous for?",
              "answer": "U.S. diplomat, oldest member of the Constitutional Convention, first Postmaster General of the United States, writer of 'Poor Richard’s Almanac', started the first free libraries",
              "points": 800
            },
            {
              "question": "Who is the 'Father of Our Country'?",
              "answer": "(George) Washington",
              "points": 900
            },
            {
              "question": "Who was the first President?",
              "answer": "(George) Washington",
              "points": 1000
            }
          ]
              
      
      }
    ]
  
  


export default function Jeopardy() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [showIncorrect, setShowIncorrect] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState([]);


   // Load incorrect answers from localStorage on mount
   useEffect(() => {
    const savedIncorrect = JSON.parse(localStorage.getItem('incorrectAnswers')) || [];
    setIncorrectAnswers(savedIncorrect);
}, []);

// Save incorrect answers to localStorage
useEffect(() => {
    localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));
}, [incorrectAnswers]);

// Calculate total questions and correct percentage
const totalQuestions = categories.reduce((total, category) => {
    const questions = Object.values(category)[0];
    return total + questions.length;
}, 0);
const correctCount = correctAnswers.length;



    const playSoundOnClick = () => {
        const audio = new Audio(clickSound);
        audio.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    };

    const playWrongSound = () => {
        const audio = new Audio(wrongSound);
        audio.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    };

    const playCorrect = () => {
        const audio = new Audio(correctSound);
        audio.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    };

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
        setShowAnswer(false);
    };

    const handleShowAnswer = () => {
        setShowAnswer(true);
    };

    const handleAnswer = (isCorrect) => {
      if (isCorrect) {
          setScore(score + selectedQuestion.points);
          setCorrectAnswers(prev => [...prev, selectedQuestion]);
      } else {
          setIncorrectAnswers(prev => [...prev, selectedQuestion]);
      }
      setAnsweredQuestions([...answeredQuestions, selectedQuestion]);
      setSelectedQuestion(null);
  };

    const isQuestionAnswered = (question) => {
        return answeredQuestions.some((q) => q.question === question.question);
    };

    return (
        <div className="container">

{correctCount / totalQuestions >= 0.6 && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                />
            )}

            <h1 className="title">US Citizenship Test Jeopardy</h1>
            <h3 style={{fontSize:"17px"}} className="title">← Scroll Horizontally to View More Categories → </h3>
            <div className="categories">
                {categories.map((category) =>
                    Object.entries(category).map(([categoryName, questions]) => (
                        <div className="card" key={categoryName}>
                            <div className="card-content">
                                <h2 style={{fontSize:"12px"}} className="category-title">{categoryName}</h2>
                                {questions.map((q) => (
                                    <button
                                        key={q.question}
                                        className={`question-button ${isQuestionAnswered(q) ? 'answered' : ''}`}
                                        onClick={() => {
                                            playSoundOnClick();
                                            handleQuestionClick(q);
                                        }}
                                        disabled={isQuestionAnswered(q) || selectedQuestion === q}
                                    >
                                        {q.points} Points
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {selectedQuestion && (
                <div className="question-box">
                    <h2 className="question">{selectedQuestion.question}</h2>
                    {showAnswer ? (
                        <p className="answer">Answer: {selectedQuestion.answer}</p>
                    ) : (
                        <button className="show-answer-button" onClick={handleShowAnswer}>
                            Show Answer
                        </button>
                    )}

                    <div className="actions">
                        <button className="correct-button" onClick={() => {playCorrect();handleAnswer(true)}}>
                            Correct
                        </button>
                        <button className="incorrect-button" onClick={() => {playWrongSound();handleAnswer(false)}}>
                            Incorrect
                        </button>
                    </div>
                </div>
            )}

            <div className="score">Score: {score}</div>
            {/* Incorrect answers section */}
            <div className="incorrect-section">
                <button 
                    className="toggle-incorrect"
                    onClick={() => setShowIncorrect(!showIncorrect)}
                >
                    {showIncorrect ? 'Hide Incorrect Answers' : 'Show Incorrect Answers'}
                </button>
                
                {showIncorrect && (
                    <div className="incorrect-list">
                        <button 
                            className="clear-incorrect"
                            onClick={() => setIncorrectAnswers([])}
                        >
                            Clear All Incorrect Answers
                        </button>
                        
                        {incorrectAnswers.map((q, index) => (
                            <div key={index} className="incorrect-item">
                                <p><strong>Question:</strong> {q.question}</p>
                                <p><strong>Answer:</strong> {q.answer}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
