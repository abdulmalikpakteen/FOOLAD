#Author: Malik.email@gmail.com
Feature: Login feature

  Background: 
    Given I logged into OrangeHRM with "Admin" and "admin123" and click login
    When I click Recruitment Module and click Vacancies

  Scenario: 
    And Click Add
    And Select Job Title to any job Title
    And Enter Vacancy Name
    And Enter Hiring Manager "John Smith" to John Smih
    And Enter Number Of Positions "IT"
    And Enter Description "WellDone"
    And I Click Save

  Scenario: 
    When I click Recruitment Module and click Vacancies
    And Select Job Title that matches previous entry.
    And Select Vacancy to Vacancy name that matches previous entry.
    And Select Hiring Manager to John Smith
    And Select Status to All
    Then Click Search

  Scenario: 
    When I click Recruitment Module and click Vacancies
    And Select Job Title that matches previous entry.
    And Select Vacancy to Vacancy name that matches previous entry.
    And Select Hiring Manager to John Smith
    And Select Status to All
    And Click Search
    And Check the Checkbox of created Vacancy 
    And Click Delete
