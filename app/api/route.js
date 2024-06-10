import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req) {

    const { messages } = await req.json();

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    messages.unshift({
        role: 'system',
        content: `You are PortfolioV-GPT, answering only questions based on the resume provided.
    Resume:
    ${DATA_RESUME}

    Help users learn more about Victor from his resume.`
    })

    const response = await client.getChatCompletions(model, messages, {
        maxTokens: 128,
    })

    return NextResponse.json({
        message: response.choices[0].message.content
    })
}

const DATA_RESUME = `Victor Prieto
victorprie@csu.fullerton.edu | 442-356-1410 | https://vp1-2-3.github.io 

Education:
California State University Fullerton						 Fullerton, CA
Bachelor of Science in Computer Science
Graduating 2024
GPA: 3.4
Relevant coursework: OOP, AI, OS, Computer Networks, C++, Data Structures, Algorithms, Computational Bioinformatics, Compilers, Databases and File Structures, Software Engineering, Python

Experience:
Warehouse Associate
Eastvale, CA
Amazon
June 2022 - February 2023
•  Packaged goods
•  Freight Handling
Walmart Associate CAP 2/Overnights
Victorville, CA
Walmart
August 2020 - October 2021
•  Unloaded trucks
•  Stocked Aisles
•  Organization of backroom
•  Good standing to become a team lead
•  Freight Handling
•  Customer Service

University Projects:
A* Search Game	
•  Description: Developed a game utilizing pygame presenting the functions of the A* algorithm
•  Role: One of two developers.
•  Technologies Used: Visual Studio Code, Python: Pygame
•  Github
React Website
•  Description: Developed a website utilizing NASA’s 3d object files to showcase a variety of aerospace tech and solar bodies
•  Skills Developed: Website Proficiency, React functionalities, Apache Server Hosting
•  Github
Additional
Language Skills: Python, C++, HTML/CSS
Technical Skills: Linear Algebra, Physics, Differential Equations, Calculus
Interests/Hobbies: Machine Learning, Data Analysis, Artificial Intelligence, Mechanical Engineering, Raspberry Pi’s

Hobbies:
Rock Climbing
Raspberry Pi
Soccer/Sports`