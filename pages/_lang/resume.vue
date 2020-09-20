<template>
  <section class="container">
    <Layout>
      <h2 slot="header" class="has-text-white">{{ $t("links.resume") }}</h2>
      <div slot="content">
        <div class="columns is-multiline">
          <div class="column is-half">
            <h3 class="title is-3">{{ $t("resume.education") }}</h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.masters") }}</h4>
                <span class="item-period">2016 - 2018</span>
                <span class="item-small"
                  >Wuhan University, {{ $t("all.china") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.bachelors") }}</h4>
                <span class="item-period">2011 - 2015</span>
                <span class="item-small"
                  >Kampala Internationl University, {{ $t("all.uganda") }}</span
                >
              </div>
            </div>
            <div class="fw-divider-space"></div>
          </div>
          <div class="column is-half">
            <h3 class="title is-3">Publications</h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">
                  Blockchain Technology in Pharmaceutical Industry to Prevent
                  Counterfeit Drugs
                </h4>
                <span class="item-period">2018/03</span>
                <span class="item-small"
                  >International Journal of Computer Applications (0975 – 8887)
                  Volume 180 – No.25, {{ $t("all.usa") }}</span
                >
              </div>
            </div>
            <div class="fw-divider-space"></div>
          </div>
          <div class="column is-half">
            <h3 class="title is-3">
              {{ $t("resume.professional_experience") }}
            </h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">Tech Lead</h4>
                <span class="item-period"
                  >2020/04 – {{ $t("all.to_present") }}</span
                >
                <h4 class="item-title">
                  {{ $t("all.software_developer") }} - Consultant
                </h4>
                <span class="item-period">2019/10 – 2020/04</span>
                <span class="item-small">Exuus Ltd, Rwanda</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("all.software_developer") }} - Frontend
                </h4>
                <span class="item-period">2019/10 – 2020/03</span>
                <span class="item-small">Omise Ltd, Thailand</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("all.software_developer") }} - Consultant
                </h4>
                <span class="item-period">2019/10 – 2019/12</span>
                <span class="item-small">Exuus, Rwanda</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("all.software_developer") }}</h4>
                <span class="item-period">2019/04 – 2019/07</span>
                <span class="item-small">Cellfam, Kenya</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("all.software_developer") }}</h4>
                <span class="item-period">2019/07 – 2020/03</span>
                <span class="item-small">Andela Kigali LTD, Rwanda</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("all.software_developer") }}</h4>
                <span class="item-period">2018/10 – 2018/11</span>
                <span class="item-small"
                  >MSO Trading Sarl, {{ $t("all.drc") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.professional.hannation") }}
                </h4>
                <span class="item-period">2017/01 – 2018/03</span>
                <span class="item-small"
                  >Hannation Technology, {{ $t("all.china") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.professional.edge") }}</h4>
                <span class="item-period">2017/06 – 2017/09</span>
                <span class="item-small"
                  >Edge Program, {{ $t("all.china") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.professional.ccfc") }}</h4>
                <span class="item-period">2017/06 – 2018/01</span>
                <span class="item-small">CCFC, {{ $t("all.china") }}</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.professional.ades") }}</h4>
                <span class="item-period">2016/01 – 2018/02</span>
                <span class="item-small"
                  >CARITAS Kisangani, {{ $t("all.drc") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.professional.ades") }}</h4>
                <span class="item-period">2015/09 – 2018/01</span>
                <span class="item-small">ADES ASBL, {{ $t("all.drc") }}</span>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.professional.sudan_school") }}
                </h4>
                <span class="item-period">2015/07 – 2015/08</span>
                <span class="item-small"
                  >International School of Sudan, {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.professional.sudan_school") }}
                </h4>
                <span class="item-period">2013/08 – 2015/02</span>
                <span class="item-small"
                  >World Mission Maranatha Church, {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.professional.maranatha") }}
                </h4>
                <span class="item-period">2013/08 – 2015/02</span>
                <span class="item-small"
                  >World Mission Maranatha Church, {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.professional.jerm") }}</h4>
                <span class="item-period">2014/04 – 2014/07</span>
                <span class="item-small"
                  >Jerm Technology, {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.professional.monaco_institute") }}
                </h4>
                <span class="item-period">2014/04 – 2014/07</span>
                <span class="item-small"
                  >Monaco Institute of Business and Computer Science,
                  {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.professional.ict_center") }}
                </h4>
                <span class="item-period">2012/04 – 2018/07</span>
                <span class="item-small"
                  >ICTCenter Training center, {{ $t("all.uganda") }}</span
                >
              </div>
            </div>
            <div class="fw-divider-space"></div>
          </div>
          <div class="column is-half">
            <h3 class="title is-3">{{ $t("resume.personal_projects") }}</h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">Bible Desktop App</h4>
                <span class="item-period"
                  >2019 - {{ $t("all.to_present") }}</span
                >
                <span class="item-small">
                  <a
                    href="https://sourceforge.net/projects/bible-desktop/"
                    target="_blank"
                    >Download - sourceforce</a
                  >
                </span>
                <p>{{ $t("resume.projects.bible_desktop") }}</p>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">Cheke</h4>
                <span class="item-period"
                  >2019 - {{ $t("all.to_present") }}</span
                >
                <span class="item-small">
                  <a href="https://www.npmjs.com/package/cheke" target="_blank"
                    >cheke - npm</a
                  >
                </span>
                <p>{{ $t("resume.projects.cheke") }}</p>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">Apprendre|Learn Lingala</h4>
                <span class="item-period"
                  >2015 - {{ $t("all.to_present") }}</span
                >
                <span class="item-small">Playstore</span>
                <p>{{ $t("resume.projects.lingala") }}</p>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">Pré-Exétat</h4>
                <span class="item-period"
                  >2016 - {{ $t("all.to_present") }}</span
                >
                <span class="item-small">Kampala Internationl University</span>
                <p>{{ $t("resume.projects.exetat") }}</p>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">Wikilangue</h4>
                <span class="item-period">2017 - 2019</span>
                <span class="item-small">
                  <a href="www.wikilangue.org" target="_blank"
                    >www.wikilangue.org</a
                  >
                </span>
                <p>{{ $t("resume.projects.wikilangue") }}</p>
              </div>
              <div class="timeline-item">
                <h4 class="item-title">xlszipsave</h4>
                <span class="item-period"
                  >2017 - {{ $t("all.to_present") }}</span
                >
                <span class="item-small">
                  <a
                    href="https://www.npmjs.com/package/xlszipsave"
                    target="_blank"
                    >xlszipsave - npm</a
                  >
                </span>
                <p>{{ $t("resume.projects.xlszipsave") }}</p>
              </div>
            </div>
            <div class="fw-divider-space"></div>
          </div>
          <div class="column is-half">
            <h3 class="title is-3">{{ $t("resume.professional_training") }}</h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.training.chinese") }}</h4>
                <span class="item-period">2016/03 – 2016/06</span>
                <span class="item-small"
                  >Wuhan Univsersity, {{ $t("all.china") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.training.ccna") }}</h4>
                <span class="item-period">2013/08 – 2013/12</span>
                <span class="item-small"
                  >Monaco Institute, {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">{{ $t("resume.training.android") }}</h4>
                <span class="item-period">2013/07 – 2013/08</span>
                <span class="item-small"
                  >Zalego Institute, {{ $t("all.uganda") }}</span
                >
              </div>
              <div class="timeline-item">
                <h4 class="item-title">
                  {{ $t("resume.training.administration") }}
                </h4>
                <span class="item-period">2013/04 – 2013/08</span>
                <span class="item-small"
                  >ICTCenter trainining center, {{ $t("all.uganda") }}</span
                >
              </div>
            </div>
            <div class="fw-divider-space"></div>
          </div>
        </div>
        <h3 class="title is-3">{{ $t("resume.my_skills") }}</h3>
        <div class="columns is-multiline">
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">{{ $t("resume.skills.languages") }}</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">{{ $t("all.french") }}</h4>
              <progress class="progress is-info" value="95" max="50"
                >95%</progress
              >

              <h4 class="title is-5">{{ $t("all.english") }}</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >

              <h4 class="title is-5">{{ $t("all.swahili") }}</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">{{ $t("all.lingala") }}</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">{{ $t("all.chinese") }}</h4>
              <progress class="progress is-info" value="40" max="100"
                >40%</progress
              >
            </div>
            <div class="divider-space"></div>
          </div>

          <!-- Operating System -->
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">{{ $t("resume.skills.os") }}</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">CentOS</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">Mac OS</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >

              <h4 class="title is-5">RedHat / Fedora</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">Ubuntu</h4>
              <progress class="progress is-info" value="85" max="100"
                >85%</progress
              >

              <h4 class="title is-5">Windows XP, 7, 8.1, 10</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >
            </div>
            <div class="divider-space"></div>
          </div>

          <!-- design -->
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">{{ $t("resume.skills.design") }}</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">Autocad</h4>
              <progress class="progress is-info" value="60" max="100"
                >60%</progress
              >

              <h4 class="title is-5">Illustrator</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">Photoshop</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">Sketch</h4>
              <<<<<<< HEAD
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >
              =======
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >
              >>>>>>> ce3ffe3... update exuus job title
            </div>
            <div class="divider-space"></div>
          </div>

          <!-- Frontend -->
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">Frontend</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">HTMl, CSS & JS</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >

              <h4 class="title is-5">AngularJS</h4>
              <progress class="progress is-info" value="60" max="100"
                >60%</progress
              >

              <h4 class="title is-5">JQuery</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">ReactJS</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">
                UI: Bulma, Bootstrap, Element-UI & Tailwing
              </h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">VueJS</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >
            </div>
            <div class="divider-space"></div>
          </div>

          <!-- Backend -->
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">Backend</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">Flask Python</h4>
              <progress class="progress is-info" value="60" max="100"
                >60%</progress
              >

              <h4 class="title is-5">Laravel PHP</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">NodeJS</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >

              <h4 class="title is-5">USSD Comviva Gateway</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >
            </div>
            <div class="divider-space"></div>
          </div>

          <!-- CMS -->
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">CMS</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">Joomla</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">WordPress</h4>
              <progress class="progress is-info" value="90" max="100"
                >90%</progress
              >
            </div>
            <div class="divider-space"></div>
          </div>

          <!-- Programming -->
          <div class="column is-half">
            <div class="block-title">
              <h3 class="title is-3">{{ $t("resume.skills.programming") }}</h3>
            </div>
            <div class="skills-info">
              <h4 class="title is-5">C</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">C++</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">C#</h4>
              <progress class="progress is-info" value="60" max="100"
                >60%</progress
              >

              <h4 class="title is-5">Java</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">NodeJS</h4>
              <progress class="progress is-info" value="80" max="100"
                >80%</progress
              >

              <h4 class="title is-5">Lua</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">PHP</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >

              <h4 class="title is-5">Python</h4>
              <progress class="progress is-info" value="70" max="100"
                >70%</progress
              >
            </div>
            <div class="divider-space"></div>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from "~/components/PageLayout";
export default {
  components: {
    Layout
  }
};
</script>

<style>
.timeline {
  border-left: 2px solid #e0e0e0;
  padding: 15px 0;
}
.timeline-item {
  position: relative;
  padding: 15px 20px 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-left: 2px solid #2196f3;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
}

.timeline-item:hover {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:before {
  content: "";
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -29px;
  border: 2px solid #2196f3;
  z-index: 2;
}

.timeline-item:after {
  content: "";
  display: inline-block;
  position: absolute;
  background-color: #2196f3;
  border-radius: 10px;
  width: 29px;
  height: 2px;
  top: 25px;
  left: -29px;
  z-index: 1;
}

.timeline-item .item-title {
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.2em;
}

.timeline-item .item-period {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #2196f3;
  margin-bottom: 8px;
}

.timeline-item .item-small {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #9e9e9e;
  margin-left: 5px;
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 1px solid #e0e0e0;
}

.timeline-item .item-logo {
  display: block;
  margin-bottom: 5px;
}

.timeline-item .item-logo img {
  max-width: 200px;
  max-height: 48px;
}

.block-title {
  margin-bottom: 20px;
  text-decoration: underline;
}
.skills-info {
  margin-bottom: 30px;
  margin-top: 10px;
}

.skills-info h4 {
  font-size: 0.8em;
  line-height: 1.1em;
  position: relative;
  margin: 0 0 5px;
}

.skill-container {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 12px;
  margin-bottom: 12px;
  width: 100%;
}

.skill-percentage {
  background-color: #2196f3;
  height: 10px;
  padding: 0;
}

.skill-percentage {
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out;
}

.fw-divider-space {
  clear: both;
  width: 100%;
  padding-top: 30px;
}
</style>
