document.addEventListener('DOMContentLoaded',()=>{
  // Scroll animation observer
  const observerOptions={threshold:0.1,rootMargin:'0px 0px -50px 0px'};
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.animation='fadeInUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  },observerOptions);
  
  // Observe all cards and sections for animation (including members)
  document.querySelectorAll('.card, .flip-card, .quiz-card, .member-card, .page-header').forEach(el=>observer.observe(el));
  
  const navToggle=document.getElementById('navToggle');
  const siteNav=document.getElementById('siteNav');
  
  // Toggle mobile nav
  navToggle.addEventListener('click',()=>{
    siteNav.classList.toggle('show');
  });
  
  // Close mobile nav when link clicked
  siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>siteNav.classList.remove('show')));

  // Close nav when clicking outside
  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.site-header')) siteNav.classList.remove('show');
  });

  // Contact form handler
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=data.get('name');
      const email=data.get('email');
      const subject=data.get('subject')||'No subject';
      alert(`Thanks, ${name}! We've received your message about "${subject}". We'll be in touch at ${email}. (Demo only)`);
      form.reset();
    });
  }

  // Quiz functionality
  const quizContainer=document.getElementById('quizContainer');
  if(quizContainer){
    const quizData=[
      {
        question:"Which renewable energy source harnesses the power of the sun?",
        options:["Solar","Wind","Hydro"],
        correct:0
      },
      {
        question:"What does Synergy stand for as our mission?",
        options:["Sustainable Development Goals","Synergy Energy Goals","Smart Digital Guidelines"],
        correct:1
      },
      {
        question:"Which of these is NOT a renewable energy source?",
        options:["Solar","Coal","Wind"],
        correct:1
      },
      {
        question:"What is the main advantage of LED bulbs?",
        options:["They last longer","They use 75% less energy than incandescent bulbs","They produce more light"],
        correct:1
      },
      {
        question:"Which country leads in solar energy production?",
        options:["Germany","China","USA"],
        correct:1
      },
      {
        question:"What percentage of energy do fossil fuels currently provide globally?",
        options:["~80%","~50%","~30%"],
        correct:0
      }
    ];

    let answered=new Set();
    let score=0;

    function loadQuiz(){
      const content=document.getElementById('quizContent');
      content.innerHTML=`
        <div class="quiz-grid">
          ${quizData.map((q,idx)=>`
            <div class="quiz-card" id="card-${idx}">
              <h4>Q${idx+1}</h4>
              <p>${q.question}</p>
              <div class="quiz-options">
                ${q.options.map((opt,i)=>`
                  <button class="quiz-option" onclick="handleAnswer(${idx},${i},${q.correct})">${opt}</button>
                `).join('')}
              </div>
              <div class="quiz-result" id="result-${idx}" style="display:none;">
                <p><strong>Correct Answer:</strong> ${q.options[q.correct]}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:2rem;">
          <button class="btn" onclick="showQuizResults()">Submit Quiz</button>
        </div>
      `;
    }

    window.handleAnswer=(idx,selected,correct)=>{
      const card=document.getElementById(`card-${idx}`);
      const resultDiv=document.getElementById(`result-${idx}`);
      const buttons=card.querySelectorAll('.quiz-option');
      
      resultDiv.style.display='block';
      buttons.forEach(btn=>btn.disabled=true);
      
      if(selected===correct && !answered.has(idx)){
        score++;
      }
      answered.add(idx);
      
      buttons[selected].style.background='#ff6b6b';
      buttons[correct].style.background='#51cf66';
    };

    window.showQuizResults=()=>{
      const results=document.getElementById('quizResults');
      const content=document.getElementById('quizContent');
      content.style.display='none';
      results.style.display='block';
      document.getElementById('quizScore').textContent=score;
      document.getElementById('quizTotal').textContent=quizData.length;
      const percentage=(score/quizData.length)*100;
      let message='';
      if(percentage===100) message='Perfect! You\'re an energy expert! 🌟';
      else if(percentage>=80) message='Excellent work! You know a lot about clean energy! 💪';
      else if(percentage>=60) message='Good job! You\'re learning about energy. Keep it up! 📚';
      else if(percentage>=40) message='Nice try! Learn more about Synergy and share your knowledge. 🌍';
      else message='Don\'t worry! Energy is complex.';
      document.getElementById('quizMessage').textContent=message;
    };

    loadQuiz();
  }
});
