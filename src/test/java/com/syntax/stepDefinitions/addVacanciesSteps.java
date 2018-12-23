package com.syntax.stepDefinitions;



import org.openqa.selenium.support.ui.Select;

import com.syntax.pages.AddVaccCriteriaPage;
import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addVacanciesSteps {
	AddVaccCriteriaPage obj;
	@Given("^I logged into OrangeHRM with \"([^\"]*)\" and \"([^\"]*)\" and click login$")
	public void i_logged_into_OrangeHRM_with_and_and_click_login(String userName, String password) throws Throwable {
		obj= new AddVaccCriteriaPage();
		
		CommonMethods.enterValue(obj.usename, userName);
		
	    CommonMethods.enterValue(obj.password, password);
	    
	    CommonMethods.click(obj.loginbutton);
	}

	@When("^I click Recruitment Module and click Vacancies$")
	public void i_click_Recruitment_Module_and_click_Vacancies() throws Throwable {
	   CommonMethods.click(obj.Recruitment);
	   CommonMethods.click(obj.Vacancies);
	}

	@When("^Click Add$")
	public void click_Add() throws Throwable {
	    CommonMethods.click(obj.Add);
	}
	@When("^Select Job Title to any job Title$")
	public void select_Job_Title_to_any_job_Title() throws Throwable {
	    
		CommonMethods.click(obj.JobTitle);
		Select select=new Select(obj.JobTitle);
		select.selectByVisibleText("HR Manager");
	}
	
	@When("^Enter Vacancy Name$")
	public void enter_Vacancy_Name() throws Throwable {
	    CommonMethods.enterValue(obj.Vacancy, "IT");
	    Thread.sleep(3000);
	}
	@When("^Enter Hiring Manager \"([^\"]*)\" to John Smih$")
	public void enter_Hiring_Manager_to_John_Smih(String JohnSmith) throws Throwable {
	    CommonMethods.enterValue(obj.HiringManage, "John Smith");
	    
	}
	
	@When("^Enter Number Of Positions \"([^\"]*)\"$")
	public void enter_Number_Of_Positions(String arg1) throws Throwable {
	    CommonMethods.enterValue(obj.NumberofPositions, "44");
		
	
}
	
	@When("^Enter Description \"([^\"]*)\"$")
	public void enter_Description(String arg1) throws Throwable {
		CommonMethods.enterValue(obj.Description, "WellDone");
		
	    
	}
	
	@When("^I Click Save$")
	public void i_Click_Save() throws Throwable {
		CommonMethods.click(obj.Save);
		Thread.sleep(3000);
	    	 
	}
	

	@When("^Select Job Title that matches previous entry\\.$")
	public void select_Job_Title_that_matches_previous_entry() throws Throwable {
			CommonMethods.click(obj.jobTile);
			Select select=new Select(obj.jobTile);
			select.selectByVisibleText("HR Manager");
			
}

	@When("^Select Vacancy to Vacancy name that matches previous entry\\.$")
	public void select_Vacancy_to_Vacancy_name_that_matches_previous_entry() throws Throwable {
			CommonMethods.click(obj.jobVacancy);
			Select select=new Select(obj.jobVacancy);
			select.selectByVisibleText("IT");
}
	@When("^Select Hiring Manager to John Smith$")
	public void select_Hiring_Manager_to_John_Smith() throws Throwable {
	   CommonMethods.click(obj.hiringManager);
	   Select select=new Select(obj.hiringManager);
	   select.selectByVisibleText("John Smith");
	}
	
	@When("^Select Status to All$")
	public void select_Status_to_All() throws Throwable {
	   CommonMethods.click(obj.status);
	   Select select=new Select(obj.status);
	   select.selectByVisibleText("All");
	}
	@Then("^Click Search$")
	public void click_Search() throws Throwable {
	    CommonMethods.click(obj.Search);
	}
	
	@When("^Check the Checkbox of created Vacancy$")
	public void check_the_Checkbox_of_created_Vacancy() throws Throwable {
	   CommonMethods.click(obj.checkbox);
	}
	
	@When("^Click Delete$")
	public void click_Delete() throws Throwable {
	    CommonMethods.click(obj.button);
	    CommonMethods.click(obj.button1);
	}
	
	
	
	}

	
	

	
	

	
	
	
	
	
	   
	
	
	
	


	   
	    
	

