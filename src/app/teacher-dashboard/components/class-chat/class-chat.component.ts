import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { NewlinePipe } from '../../../pipes/newline/newline.pipe';

@Component({
  selector: 'app-class-chat',
  standalone: true,
  imports: [AvatarModule,NgFor,NgIf,NewlinePipe,NgxTypedJsModule],
  templateUrl: './class-chat.component.html',
  styleUrl: './class-chat.component.css'
})
export class ClassChatComponent {

  @Input() question !: any;
  @Input() scrollToBottom:any;
  @ViewChild('typeWriter') typeWriterElement!:ElementRef;

  chat = [
    {
      "id": 1,
      "question": "What is the capital of France?",
      "answer": "The capital of France is Paris, which is renowned for its rich history, stunning architecture, and cultural significance. As one of the most visited cities in the world, Paris is known for iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. It serves as a global center for art, fashion, gastronomy, and culture, making it a truly remarkable destination."
    },
    {
      "id": 2,
      "question": "Who wrote the famous play 'Romeo and Juliet'?",
      "answer": "The famous play 'Romeo and Juliet' was written by William Shakespeare, a renowned English playwright and poet. It is one of his most well-known works and has been performed countless times since its creation in the late 16th century. The tragic love story of Romeo and Juliet, set in the Italian city of Verona, has captivated audiences for generations with its timeless themes of love, conflict, and fate."
    },
    {
      "id": 3,
      "question": "What is the chemical symbol for water?",
      "answer": "The chemical symbol for water is H2O, which represents its molecular composition. Water is a vital substance for life on Earth, existing in various forms such as liquid, solid (ice), and gas (vapor). It is essential for numerous biological processes and is found abundantly on our planet, covering about 71% of its surface."
    },
    {
      "id": 4,
      "question": "What is the largest planet in our solar system?",
      "answer": "The largest planet in our solar system is Jupiter, a gas giant with a diameter of about 143,000 kilometers (88,846 miles). It is known for its distinct bands of clouds and the Great Red Spot, a massive storm system. Jupiter's size and gravitational influence have a significant impact on the dynamics of the solar system, playing a crucial role in shaping its structure and behavior."
    },
    {
      "id": 5,
      "question": "Who painted the Mona Lisa?",
      "answer": "The Mona Lisa, one of the most famous paintings in the world, was painted by Leonardo da Vinci, an Italian polymath of the Renaissance era. Created between 1503 and 1506, the artwork is renowned for its enigmatic smile and meticulous detail. It is housed in the Louvre Museum in Paris, where it attracts millions of visitors annually, showcasing da Vinci's exceptional skill and artistic genius."
    },
    {
      "id": 6,
      "question": "What is the boiling point of water in Celsius?",
      "answer": "The boiling point of water in Celsius is 100 degrees. This is the temperature at which water transitions from a liquid state to a gaseous state, forming water vapor. It is a fundamental concept in thermodynamics and has practical implications in various fields such as chemistry, cooking, and climate science."
    },
    {
      "id": 7,
      "question": "Who was the first person to step on the Moon?",
      "answer": "Neil Armstrong, an American astronaut and the commander of the Apollo 11 mission, was the first person to step on the Moon on July 20, 1969. His iconic words, 'That's one small step for [a] man, one giant leap for mankind,' echoed around the world as he descended from the lunar module Eagle onto the lunar surface, marking a historic moment in human exploration."
    },
    {
      "id": 8,
      "question": "What is the tallest mammal on Earth?",
      "answer": "The tallest mammal on Earth is the giraffe, known for its long neck and legs. These graceful creatures inhabit the savannas and grasslands of Africa, where they browse on leaves from tall trees using their prehensile tongues. With an average height of around 5.5 meters (18 feet) for adult males, giraffes exemplify nature's remarkable diversity and adaptation."
    },
    {
      "id": 9,
      "question": "Who is the author of 'To Kill a Mockingbird'?",
      "answer": "Harper Lee, an American novelist, is the author of 'To Kill a Mockingbird,' a Pulitzer Prize-winning novel published in 1960. Set in the fictional town of Maycomb, Alabama, during the Great Depression, the novel explores themes of racial injustice, morality, and compassion through the eyes of its young protagonist, Scout Finch. 'To Kill a Mockingbird' remains a classic of modern American literature, celebrated for its powerful storytelling and profound social commentary."
    },
    {
      "id": 10,
      "question": "What year did the Titanic sink?",
      "answer": "The Titanic, a British passenger liner, sank on April 15, 1912, during its maiden voyage from Southampton to New York City. The tragic sinking occurred after the ship struck an iceberg in the North Atlantic Ocean, leading to the loss of more than 1,500 lives. The disaster remains one of the deadliest maritime tragedies in history, sparking significant changes in maritime safety regulations and capturing the public's imagination for generations to come."
    }
  ];  

  startTyping = false

    chatobj = {
    id:0,
    question: "",
    answer:"loading"
    }


    updateChat(){
    let newChatObj = {
        id: this.chat.length,
        question: this.question,
        answer: "loading"
    };
    this.chat.push(newChatObj)
    setTimeout(()=>{
        this.chat[this.chat.length-1].answer = "I apologize, but I don't have a specific response to provide for that query. Is there anything else I can assist you with?"
        this.startTyping = true
    },3000)
    this.scrollToBottom();
    }

    // i = 0;
    // speed = 50; /* The speed/duration of the effect in milliseconds */

    // typeWriter(txt:string) {
    //     if (this.i < txt.length) {
    //         console.log(this.typeWriterElement.nativeElement)
    //         this.i++;
    //         setTimeout(this.typeWriter, this.speed);
    //     }
    //     else{
    //         this.chat[this.chat.length-1].answer = "I apologize, but I don't have a specific response to provide for that query. Is there anything else I can assist you with?"
    //         this.i = 0;
    //     }
    // }


}
