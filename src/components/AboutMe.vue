<template>
  <q-page>
    <q-header>
      <q-toolbar-title>About Me</q-toolbar-title>
    </q-header>
    <q-page-container>
      <div class="row justify-center">
        <div class="col-14 col-sm-8 col-md-6">
              <div class="row items-center">
                <div class="col-auto">
                  <q-img
                    src="..\assets\IMG-20220326-WA0006.jpg"
                    alt="User's profile picture"
                    class="rounded-borders"
                    width="250px"
                    height="250px"
                  />
                </div>

                <div class="col">
                  <h3 class="text-h6 text-primary">Tejal Wagh</h3>
                  <p class="text-subtitle2">Software Engineer</p>
                </div>
              </div>

              <h4 class="text-h6 text-primary">ABOUT ME</h4>
              <p>
                Hey, Everyone!<br>I am Tejal Santosh Wagh. I've pursued my Engineering in Electronincs and telecommunication from International Institute of Information technology, Pune.<br>Currently, I'm working at LTIMindtree Services.
              </p>
              <div class="q-pa-md q-gutter-sm">

<q-btn to="/tejal/MoreAbout" label="More About Me" push color="primary" />

</div>
              <h4 class="text-h6 text-primary">TECK-STACK</h4>
              <p>Being an Ethusiast in Data Analytics. I've done my internship in Data Analytics Consulting at KPMG. <br>And, as my final year project I've contributed in a Face spoof detection project which was made using rPPG technology and vaies models such as ANN and CNN.<br>Apart from this Im also sound with the following technologies and languages:<br>C/C++<br>Python Basics<br>HTML, CSS and JAVAScript<br>Tableau<br>JIRA tool<br>AGILE<br>Linux<br>Azzure tools<br>VueJS
              </p>

              <h4 class="text-h6 text-primary">CONTACT DETAILS</h4>
              <!-- <p class="text-grey-8">
                Email: tejal.wagh100@gmail.com
              </p> -->
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="mail"/>
    <p>
                <b>Email: tejal.wagh100@gmail.com</b>
              </p>
    <br>
    <q-btn icon="phone" stack glossy color="primary" />
    <b>+91-9307368807</b>
  </div>

        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<style>
  .bg-grey-1 {
    background-color: #f5f5f5;
  }

  .rounded-borders {
    border-radius: 50%;
  }

  .text-primary {
    color: #1976d2;
  }

  .text-grey-8 {
    color: #888888;
  }
</style>
