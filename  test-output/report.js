$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Com.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Malik.email@gmail.com"
    }
  ],
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6618706665,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\" and click login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "addVacanciesSteps.i_logged_into_OrangeHRM_with_and_and_click_login(String,String)"
});
formatter.result({
  "duration": 1400728861,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 1412878055,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-feature;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Click Add",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select Job Title to any job Title",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter Vacancy Name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Hiring Manager \"John Smith\" to John Smih",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter Number Of Positions \"IT\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter Description \"WellDone\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "addVacanciesSteps.click_Add()"
});
formatter.result({
  "duration": 381297318,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Job_Title_to_any_job_Title()"
});
formatter.result({
  "duration": 291282003,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.enter_Vacancy_Name()"
});
formatter.result({
  "duration": 3104135140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 22
    }
  ],
  "location": "addVacanciesSteps.enter_Hiring_Manager_to_John_Smih(String)"
});
formatter.result({
  "duration": 96572898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT",
      "offset": 27
    }
  ],
  "location": "addVacanciesSteps.enter_Number_Of_Positions(String)"
});
formatter.result({
  "duration": 119294896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WellDone",
      "offset": 19
    }
  ],
  "location": "addVacanciesSteps.enter_Description(String)"
});
formatter.result({
  "duration": 105233665,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.i_Click_Save()"
});
formatter.result({
  "duration": 3552404921,
  "status": "passed"
});
formatter.after({
  "duration": 682258968,
  "status": "passed"
});
formatter.before({
  "duration": 4082848450,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\" and click login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "addVacanciesSteps.i_logged_into_OrangeHRM_with_and_and_click_login(String,String)"
});
formatter.result({
  "duration": 1239474415,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 1298838556,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-feature;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Select Job Title that matches previous entry.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Vacancy to Vacancy name that matches previous entry.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Hiring Manager to John Smith",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Status to All",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Search",
  "keyword": "Then "
});
formatter.match({
  "location": "addVacanciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 892967507,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Job_Title_that_matches_previous_entry()"
});
formatter.result({
  "duration": 238274059,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Vacancy_to_Vacancy_name_that_matches_previous_entry()"
});
formatter.result({
  "duration": 218687778,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Hiring_Manager_to_John_Smith()"
});
formatter.result({
  "duration": 220822818,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Status_to_All()"
});
formatter.result({
  "duration": 191618899,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.click_Search()"
});
formatter.result({
  "duration": 415450002,
  "status": "passed"
});
formatter.after({
  "duration": 608358573,
  "status": "passed"
});
formatter.before({
  "duration": 3998708621,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\" and click login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "addVacanciesSteps.i_logged_into_OrangeHRM_with_and_and_click_login(String,String)"
});
formatter.result({
  "duration": 1223851015,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 1586876185,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-feature;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Select Job Title that matches previous entry.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select Vacancy to Vacancy name that matches previous entry.",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select Hiring Manager to John Smith",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Select Status to All",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click Search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check the Checkbox of created Vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click Delete",
  "keyword": "And "
});
formatter.match({
  "location": "addVacanciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 840196790,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Job_Title_that_matches_previous_entry()"
});
formatter.result({
  "duration": 248926507,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Vacancy_to_Vacancy_name_that_matches_previous_entry()"
});
formatter.result({
  "duration": 246593492,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Hiring_Manager_to_John_Smith()"
});
formatter.result({
  "duration": 209207810,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.select_Status_to_All()"
});
formatter.result({
  "duration": 192637779,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.click_Search()"
});
formatter.result({
  "duration": 341323759,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.check_the_Checkbox_of_created_Vacancy()"
});
formatter.result({
  "duration": 122791857,
  "status": "passed"
});
formatter.match({
  "location": "addVacanciesSteps.click_Delete()"
});
formatter.result({
  "duration": 711782602,
  "status": "passed"
});
formatter.after({
  "duration": 633629193,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SyntaxTeam"
    }
  ],
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4260155239,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 46826395,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Valid login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 173637454,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 1109735853,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 34702,
  "status": "passed"
});
formatter.after({
  "duration": 641620947,
  "status": "passed"
});
});