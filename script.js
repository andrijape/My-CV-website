// Variables
const btns = document.querySelector('.btn');
const detailsDiv = document.getElementById('details');
const burgerBtn = document.getElementById('burgerBtn');

// Event listeners
btns.addEventListener('click', expandDiv);
burgerBtn.addEventListener('click', burgerMenu);

// Creating a details div and calling the function based on section called
function expandDiv(e) {
  let clickedElement = e.target;
  let title = clickedElement.innerText;
  let i = clickedElement.classList;

  if (title === 'Education' || i.contains('fa-graduation-cap')) {
    detailsDiv.style.backgroundColor = '#2c2c38';
    educationDiv();
  } else if (title === 'Experience' || i.contains('fa-briefcase')) {
    detailsDiv.style.backgroundColor = '#2c2c38';
    experienceDiv();
  } else if (title === 'Skills and languages' || i.contains('fa-comments')) {
    detailsDiv.style.backgroundColor = '#2c2c38';
    skillsDiv();
  } else if (title === 'About me' || i.contains('fa-user')) {
    detailsDiv.style.backgroundColor = '#2c2c38';
    aboutDiv();
  }
};

// Education section
function educationDiv() {
  detailsDiv.innerHTML = `
                          <div class="title">
                            <i class="fas fa-graduation-cap"></i> Education
                          </div>
                          <div class="content">
                            <p class="education"><b>2009 - 2018</b><br> University of Kragujevac, Faculty of Economics, <br>Module: Tourism and hotel management <br>Kragujevac, Serbia</p>              
                            <p class="education"><b>2005 - 2009</b><br> High school of Economics and Trade, <br>Module: Finance <br>Pozarevac, Serbia</p>
                          </div>
                        `;
};

// Experience section
function experienceDiv() {
  detailsDiv.innerHTML = `
                          <div class="title">
                            <i class="fas fa-briefcase"></i> Experience
                          </div>
                          <div class="content-experience">
                            <div id="experience">
                              <p class='welcome'>FEEL FREE TO INTERACT WITH THE TIMELINE BELOW TO SEE MY PREVIOUS EXPERIENCES</p>
                            </div>                                  
                            <div id="timeline">
                              <div id="line"></div>
                            </div>                                  
                          </div>
                        `;

  const experience = document.getElementById('experience');
  const line = document.getElementById('line');
  let id = 0;

  // Create timeline dots
  for (let i = 0; i < 4; i++) {
    const lineDot = document.createElement('div');
    lineDot.classList.add('line-dot');
    lineDot.setAttribute('id', id);

    line.appendChild(lineDot);
    id += 1;
  };

  // Add event listeners on timeline dots
  let dotOne = document.getElementById('0');
  dotOne.addEventListener('click', () => {
    experience.classList.add('clip');
    experience.innerHTML = `<pre> <b>Accountant at Pro – arpo 1, October 2009 - present,
 Pozarevac Serbia</b>
    
    - Bookkeeping for SME's (small and medium - sized enterprises)
    - Job organization
    - Money handling & organizing, financial advising & consulting
    - Invoicing, billing administration, financial reporting
    - Human resources
    - Process evaluation & improvement
    - Technical support
    - Data analysis
    - Processing payroll
    - Compiling monthly and yearly reports</pre>`;

    line.style.background = 'linear-gradient(to right, #ffc104 17%, #1e1e28 20%)';
  });

  let dotTwo = document.getElementById('1');
  dotTwo.addEventListener('click', () => {
    experience.classList.add('clip');
    experience.innerHTML = `<pre> <b>File and data organization at City Hall, July 2009 – August 2009,
 Pozarevac, Serbia</b>
    
    - Responsible for smooth data transfer from old to new database
    - Creating and distributing documents
    - Setting appointments and arranging meetings with applicants
    - Process monitoring and continuous improvement</pre>`;

    line.style.background = 'linear-gradient(to right, #ffc104 38%, #1e1e28 40%)';
  });

  let dotThree = document.getElementById('2');
  dotThree.addEventListener('click', () => {
    experience.classList.add('clip');
    experience.innerHTML = `<pre> <b>Website maintenance (freelancing), February 2014 – December 2014, 
 RapidSerbia, Serbia</b>
    
    - Designing & organizing sections of the forum
    - Data checking & data analysis
    - Updating databases
    - Communicating with various internal & external members
    - Translation from English language
    - Process evaluation & improvement
    - Reporting to admins</pre>`;

    line.style.background = 'linear-gradient(to right, #ffc104 59%, #1e1e28 60%)';
  });

  let dotFour = document.getElementById('3');
  dotFour.addEventListener('click', () => {
    experience.classList.add('clip');
    experience.innerHTML = `<pre> <b>Website developer (freelancing) at NMNJ, October 2016 – October 2017, 
 Belgrade, Serbia</b>
    
    - Front - end web developing (intermediate use of HTML and CSS)
    - Planning & process monitoring, 
    - Reporting </pre>`;

    line.style.background = 'linear-gradient(to right, #ffc104 77%, #1e1e28 100%)';
  });
};

// Skills & languages 
function skillsDiv() {
  detailsDiv.innerHTML = `
                          <div class="title">
                            <i class="fas fa-graduation-cap"></i> Skills and languages
                          </div>
                          <div class="content-skills">
                            <div class="professionalSkill">
                              <h4 class="skill-titles">Professional Skills:</h4>
                              <div class="professional-list">
                                <ul class="professional-ul"></ul>
                              </div>
                            </div>   
                            <div class="personalSkill">
                              <h4 class="skill-titles">Personal Skills:</h4>
                              <div class="personal-list">
                              <ul class="personal-ul"></ul>
                              </div>
                            </div>   
                            <div class="languages">
                              <h4 class="skill-titles">Languages:</h4>
                              <div class="ilr-scale">
                                <div class="language-list"></div>
                                <div class="language-dots">
                                  <span class="span-dot" id="serbian"></span>
                                  <span class="span-dot" id="english"></span>
                                  <span class="span-dot" id="italian"></span>
                                  <span class="span-dot" id="spanish"></span>
                                </div>
                              </div>
                            </div>   
                          </div>
                        `;

  /* Professional Skills */
  const professionalSkill = ['Data Analysis & Data Entry', 'Accounting', 'Client Servicing', 'Negotiation', 'Microsoft Office', 'Microsoft Windows', 'Human Resources',];
  let professionalList = document.querySelector('.professional-ul');

  let i = 0;
  const professionalInterval = setInterval(() => {
    // Create list elements with professional skills
    let li = document.createElement('li');
    let textNode = document.createTextNode(`${professionalSkill[i]}`);
    li.appendChild(textNode);
    li.classList.add('textNode');

    professionalList.appendChild(li);

    i += 1;
    if (i >= professionalSkill.length) {
      clearInterval(professionalInterval);
    };
  }, 300);

  /* Personal Skills */
  const personalSkill = ['Agility', 'Creativity', 'Teamwork', 'Detail Oriented'];
  const personalList = document.querySelector('.personal-ul');

  // Personal skills will set off after 1s
  setTimeout(() => {
    let j = 0;
    const personalInterval = setInterval(() => {
      // Create list elements with personal skills
      let li = document.createElement('li');
      let textNode = document.createTextNode(`${personalSkill[j]}`);
      li.appendChild(textNode);
      li.classList.add('textNode');

      personalList.appendChild(li);
      j += 1;
      if (j >= personalSkill.length) {
        clearInterval(personalInterval);
      };
    }, 300);
  }, 1000);

  /* Languages */
  const languages = ['Serbian:', 'English:', 'Italian:', 'Spanish:'];
  const languageList = document.querySelector('.language-list');
  const languageDots = document.querySelectorAll('.span-dot');

  // Create languages names, set off after 2s
  setTimeout(() => {
    let x = 0;
    const languageInterval = setInterval(() => {
      // Create list elements with languages, set off after 2s
      let li = document.createElement('li');
      let textNode = document.createTextNode(`${languages[x]}`);
      li.appendChild(textNode);

      languageList.appendChild(li);

      x += 1;
      if (x >= languages.length) {
        clearInterval(languageInterval);
      };
    }, 300);
  }, 2000);

  // Create Interagency Language Roundtable, set off after 3s
  setTimeout(() => {
    let x = 0;
    const dotInterval = setInterval(() => {
      // Create 5 blank dots per each span
      languageDots.forEach(e => {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        e.appendChild(dot);
      });

      x += 1;
      if (x >= 5) {
        clearInterval(dotInterval);

        // After the blank dots have been created, fill them accordingly
        try {
          let serbian = [...document.getElementById('serbian').children];
          serbian.forEach(e => {
            e.classList.remove('dot');
            e.classList.add('yellow-dot');
          });

          let english = [...document.getElementById('english').children];
          english.forEach(e => {
            e.classList.remove('dot');
            e.classList.add('yellow-dot');
          });

          let italian = [...document.getElementById('italian').children][0];
          italian.classList.remove('dot');
          italian.classList.add('yellow-dot');

          let spanish = [...document.getElementById('spanish').children][0];
          spanish.classList.remove('dot');
          spanish.classList.add('yellow-dot');
        } catch {
          /* If user clicks on Skills and languages section, and then on some other section before the whole 
             Skills and languages section has done animating, an error will appear saying that children do not exist. */
          console.log('Everything OK!')
        };
      };
    }, 300);
  }, 3000);
};

// About me section
function aboutDiv() {
  detailsDiv.innerHTML = `
                          <div class="title">
                            <i class="fas fa-user"></i> About me
                          </div>
                          <div class="content">
                            <p class="aboutMe">
                            I am a young professional with strong background in the Accounting field, who is passionate about programming with focus on Front-End development. <br>
                            <br>
                            I am very grateful to have gained an amazing experience such as accounting and managing small enterprises in such an early period of my professional life. <br>
                            <br>
                            Intrestingly, in my mid-twenties, I have developed strong passion for programming, and started exploring the field in my free time as a hobby. This hobby has developed a strong motivation for career re-orientation towards the field, which is why I have spent last couple of years growing my skills firstly in Front-End Development area.
                            </p>
                          </div>
                        `;
};

/* Burger Menu */
function burgerMenu() {
  let aside = document.getElementById('aside');
  aside.classList.toggle('burgerShow');
};