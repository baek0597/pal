export interface Prompt {
  section: string
  text: string
}

export interface Chapter {
  id: string
  title: string
  sections: string[]
  prompts: Prompt[]
}

export const chapters: Chapter[] = [
  {
    id: "ch2",
    title: "ChatGPT at a Glance",
    sections: [
      "Strategy Formulation",
      "Drawing 1",
      "Drawing 2",
      "Graph Analysis",
      "Brainstorming",
      "Preparing a Persuasive Initial Report Using GPT",
    ],
    prompts: [
      {
        section: "Strategy Formulation",
        text: `I'm a franchise consultant planning to open a chicken restaurant in Gangnam, Seoul. The area has high foot traffic and many studio apartments where office workers reside in. Can you create a business model using the Business Model Canvas, and also write a promotional catch phrases using the AIDA framework?`,
      },
      {
        section: "Strategy Formulation",
        text: `I'm a management consultant working with an electric bicycle manufacturer. Recently, we've seen a surge in competitors entering the market, which signals the need for new strategic approaches. Please develop appropriate strategies by analyzing the current economic conditions, trends in leisure sports, and conducting a SWOT analysis.`,
      },
      
      {
        section: "Drawing 1",
        text: `I need you to create an image following the instructions below:\nImage: : There is a sea around the steel mill. The steel mill has a sign titled "POSCO", and we see a large-scale vessel with three seagulls flying around it. And one Korean male idol member and one Korean female idol member are smiling to welcome customers.\nStyle: Realistic\nAspect Ratio: 16:9`,
      },
      {
        section: "Drawing 1",
        text: `Redraw the selected seagull as an eagle`,
      },
      {
        section: "Drawing 2",
        text: `The uploaded notice has low resolution and is outdated, so I'd like to create a new image. Please design a poster that delivers the content in a friendly tone for employees. The text should be written in English, and the illustrations should use bright colors.`,
      },
      {
        section: "Graph Analysis",
        text: `Create a table showing the average values grouped by gender, age, and RUNPULSE, and then draw a box plot`,
      },
     
      {
        section: "40 Principles of Invention",
        text: `As a TRIZ expert, you are tasked with enhancing the suction power of a vacuum cleaner to improve cleaning performance on carpets and bedding. However, increasing suction causes the nozzle to stick to the surface of the carpets and bedding, making it difficult to use. To resolve this, please apply the most suitable principles from the 40 Inventive Principles. \nGive me details`,
      },
      {
        section: "Brainstorming",
        text: `Ideation for Occupational Accident Prevention You are an expert in idea discovery, tasked with generating solutions to reduce frequent workplace accidents, such as entrapment, falls, falling objects, and explosions, at apartment construction sites. A brainstorming session is held with three participants, each bringing a unique perspective: Participant A is a critical thinker while participant B is a creative thinker. Participant C is an economic thinker. \nFrom each viewpoint, three ideas are generated to address accident prevention.`,
      },
      {
        section: "Preparing a Persuasive Initial Report Using GPT",
        text: `From this point forward, please follow the conditions below.\n 1. Apply the hyperparameters, "top_p=0.1, temperature=0.1."\n 2. Assume the role of a communication facilitator at POSCO.\n 3. Responses should be on par with the answer levels of a professional in workplace communication and conflict. resolution \n4. Utilize information sourced from research institutes, government publications, academic papers, journals, published materials, and encyclopedias.`,
      },
      {
        section: "Preparing a Persuasive Initial Report Using GPT",
        text: `I need to formulate a plan on how to facilitate generational communication to report it to the CEO. \nPlease compose the table of contents below, including two or three detailed content points for each section.\n(1. Background, 2. Status and Problems, 3. Approach to Improvements, 4. Concrete Action Plans, and 5. Conclusions)`,
      },
      {
        section: "Preparing a Persuasive Initial Report Using GPT",
        text: `Please provide two to three sentences of each concrete content`,
      },
      {
        section: "Preparing a Persuasive Initial Report Using GPT",
        text: `Open Canvas`,
      },
    ],
  },
  {
    id: "ch3",
    title: "Google AI Tools I",
    sections: [
      "Image generation Using Nano banana",
      "Create an ID photo",
      "Creation Music",
      "Coding 1",
      "Coding 2",
    ],
    prompts: [
      {
        section: "Image generation Using Nano banana",
        text: `I need you to create an image following the instructions below:\nImage: : There is a sea around the steel mill. The steel mill has a sign titled "POSCO", and we see a large-scale vessel with three seagulls flying around it. And one Korean male idol member and one Korean female idol member are smiling to welcome customers.\nStyle: Realistic\nAspect Ratio: 16:9`,
      },
      {
        section: "Image generation Using Nano banana",
        text: `Please add two airplanes to the image above`,
      },
      {
        section: "Create an ID photo",
        text: `Please create an ID photo of the person in the picture wearing a suit`,
      },
      {
        section: "Creation Music",
        text: `Create a song where a K-pop girl group is singing an upbeat track and rapping while caught in the spring rain.`,
      },
      {
        section: "Coding 1",
        text: `Create a PACK-MAN game with the following rules:\n- Use HTML and JavaScript.\n- Pack-Man moves using the arrow keys.\n- Ghosts move randomly.\n- Pack-Man earns points by eating dots.\n- The game ends after Pack-Man is killed 3 times.`,
      },
      {
        section: "Coding 2",
        text: `Create a simple PDF splitting web app using HTML, CSS,and JavaScript.\n- Upload a PDF file.\n- Select specific page ranges (e.g., 1-3, 5, 7-9) to extract.\n- Split and download the selected pages as a new PDF file`,
      },
    ],
  },
  {
    id: "ch4",
    title: "Google AI Tools II",
    sections: ["Using NotebookLM", "Using OPAL"],
    prompts: [
      {
        section: "Using NotebookLM",
        text: `Tell me about POSCO Holdings' business areas`,
      },
      {
        section: "Using NotebookLM",
        text: `Please explain the energy sector in detail.`,
      },
      {
        section: "Using NotebookLM",
        text: `- Create a brief slide deck explaining POSCO Holdings' business areas.\n- Set the background color to white and limit the presentation to no more than five slides.\n- Use simple diagrams and images.`,
      },
      {
        section: "Using OPAL",
        text: `Create an app that extracts audio from a YouTube video link and converts it into English and Korean text`,
      },
    ],
  },
]

export interface Website {
  name: string
  category: string
  url: string
}

export const websites: Website[] = [
  { name: "ChatGPT", category: "Conversational AI", url: "https://chatgpt.com/" },
  { name: "Copilot", category: "Conversational AI", url: "https://copilot.cloud.microsoft/" },
  { name: "Gemini", category: "Conversational AI", url: "https://gemini.google.com/" },
  { name: "Grok", category: "Conversational AI", url: "https://grok.com/" },
  { name: "Felo", category: "Conversational AI", url: "https://felo.ai/ko/" },
  { name: "Wrtn", category: "Conversational AI", url: "https://wrtn.ai/" },
  { name: "Ideogram", category: "Image AI", url: "https://ideogram.ai/" },
  { name: "GoogleFX", category: "Image AI", url: "https://labs.google/fx/ko/" },
  { name: "Bing Image Creator", category: "Image AI", url: "https://www.bing.com/images/create" },
  { name: "Lilys", category: "Summary AI", url: "https://lilys.ai/" },
  { name: "Daglo", category: "Recording Summary AI", url: "https://daglo.ai/" },
  { name: "Youtube", category: "Video Source", url: "https://www.youtube.com/" },
  { name: "NapkinAI", category: "Diagram AI", url: "https://www.napkin.ai/" },
  { name: "Autodraw", category: "Image AI", url: "https://www.autodraw.com/" },
  { name: "GammaAI", category: "Presentation AI", url: "https://gamma.app/ko/" },
  { name: "HeyGen", category: "Deepfake AI", url: "https://www.heygen.com/" },
  { name: "Suno", category: "Music AI", url: "https://suno.com/home/" },
  { name: "Replit", category: "Web/App Dev AI", url: "https://replit.com/" },
  { name: "Recraft", category: "Image AI", url: "https://www.recraft.ai/" },
  { name: "NotebookLM", category: "Knowledge Base", url: "https://notebooklm.google/" },
  { name: "Opal", category: "AI Agent", url: "https://opal.google/" },
]

export function getPromptsBySection(
  chapterId: string,
  section: string
): Prompt[] {
  const chapter = chapters.find((c) => c.id === chapterId)
  if (!chapter) return []
  return chapter.prompts.filter((p) => p.section === section)
}
