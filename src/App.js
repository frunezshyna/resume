import "./App.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function App() {
    return (
        <div className="App">
            <div className="Resume">
                <div className="Header">
                    <Header />
                </div>
                <div className="Content">
                    <div className="Contact">
                      <Contact />
                    </div>
                    <div className="Experience">
                      <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Upper Content
function Header() {
    return (
        <div>
            <h1>FRUNEZ SHYNA CAYANAN</h1>
            <h2><i>Senior Full Stack Web Developer</i></h2>
        </div>
    )
}

// Left Content
function Contact() {
  return (
    <div>
    {/* Contact Information Start */}
      <h2>CONTACT</h2>
        <h6>fsdcayanan.student@ua.edu.ph <FaEnvelope class="icon" /></h6>
        <p>+63 955 824 7422 <FaPhone class="icon" /></p>
        <p>Arayat, Pampanga <FaMapMarkerAlt class="icon" /></p>
        <p>
          <a href="https://www.linkedin.com/in/frunez-shyna-d-cayanan-5a930132a/" class="link" target="_blank" rel="noopener noreferrer">
              linkedIn
          </a><FaLinkedin class="icon" />
        </p>
        <p><a href="https://github.com/frunezshyna" class="link" target="_blank" rel="noopener noreferrer">
              Github
            </a><FaGithub class="icon" /></p>
    {/* Contact Information End */}

    {/* Education Start */}
      <h2>EDUCATION</h2>
        <p>Bachelor of Science</p>
        <p>Information Technology</p>
        <p>University of the Assumption</p>
        <p>2022 - 2026</p>
        <p>San Fernando, Pampanga</p>
    {/* Education End */}

    {/* Skills Start */}
      <h2>SKILLS</h2>
        <p>DATA COLLECTION</p>
        <p>PYTHON</p>
        <p>JAVASCRIPT</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>REACT</p>
        <p>BOOTSTRAP</p>
        <p>SQL</p>
        <p>POWER BI</p>
        <p>FIGMA</p>
        <p>CYBERSECURITY</p>
        <p>FIREWALLS</p>
    {/* Skills End */}
    </div>
  )
}

// Right Content
function Experience() {
  return (
    <div>
      <h2>WORK EXPERIENCE</h2>
    {/* Work 1 Start */}
      <div class="work">
        <h3>Senior Full Stack Web Developer</h3>
        <h4>Technology Elite, Inc.</h4>
        <h4>2035 -  current / Clark Freeport Zone, Pampanga</h4>
        <ul>
        <li>Designed responsive web applications using HTML, CSS, JavaScript, and React.</li>
        <li>Streamlined user interface with Bootstrap, enhancing user experience.</li>
        <li>Led a team project that <strong><u>increased website traffic by 40%</u></strong>.</li>
        <li>Integrated cybersecurity measures, improving application security by 25%.</li>
        </ul>
      </div>
    {/* Work 1 End */}

    {/* Work 2 Start */}
      <div class="work">
        <h3>Junior Digital Data Analyst</h3>
        <h4>Clark Outsourcing</h4>
        <h4>2030 - 2035 / Mabalacat, Pampanga</h4>
        <ul>
        <li>Developed Python scripts to reduce data preparation time by 40%.</li>
        <li>Created a Power BI template that improved report generation efficiency.</li>
        <li>Analyzed website user behavior, increasing engagement by 25%.</li>
        <li><strong><u>Designed a Power BI dashboard</u></strong> consolidating multiple data sources, enabling real-time tracking and decision-making, praised for its clarity and impact.</li>
        </ul>
      </div>
    {/* Work 2 End */}

    {/* Work 3 Start */}
      <div class="work">
        <h3>Data Analyst</h3>
        <h4>Cloudstaff</h4>
        <h4>2026 - 2030 / Angeles, Pampanga</h4>
        <ul>
        <li>Created complex Excel models that streamlined data reporting, reducing processing time by 30%.</li>
        <li>Optimized SQL queries, improving data retrieval speed by 50% for critical reports.</li>
        <li>Developed predictive models in Python that increased sales forecasting accuracy by 20%.</li>
        <li>Identified key trends through data analysis that led to strategic recommendations, <strong><u>resulting in a 15% increase in operational efficiency</u></strong>.</li>
        </ul>
      </div>
    {/* Work 3 End */}

    </div>
  )
}