package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class AddVaccCriteriaPage extends BaseClass{
	
	@FindBy(id="txtUsername")
	public WebElement usename;
	
	@FindBy(id="txtPassword")
	public WebElement password;
	
	@FindBy(id="btnLogin")
	public WebElement loginbutton;
	
	@FindBy(xpath="//*[@id=\"menu_recruitment_viewRecruitmentModule\"]/b")
	public WebElement Recruitment;
	
	@FindBy(id="menu_recruitment_viewJobVacancy")
	public WebElement Vacancies;
	
	@FindBy(id="btnAdd")
	public WebElement Add;
	
	@FindBy(id="addJobVacancy_jobTitle")
	public WebElement JobTitle;
	
	
	@FindBy(id="addJobVacancy_name")
	public WebElement Vacancy;
	
	@FindBy(id="addJobVacancy_hiringManager")
	public WebElement HiringManage;
	
	@FindBy(id="addJobVacancy_noOfPositions")
	public WebElement NumberofPositions;
	
	@FindBy(id="addJobVacancy_description")
	public WebElement Description;
	
	@FindBy(id="btnSave")
	public WebElement Save;
	
	@FindBy(xpath="//*[@id=\"vacancySearch_jobTitle\"]")
	public WebElement jobTile;
	
	@FindBy(id="vacancySearch_jobVacancy")
	public WebElement jobVacancy;
	
	@FindBy(id="vacancySearch_hiringManager")
	public WebElement hiringManager;
	
	@FindBy(id="vacancySearch_status")
	public WebElement status;
	
	@FindBy(id="btnSrch")
	public WebElement Search;
	
	@FindBy(xpath="//table[@id='resultTable']//tbody/tr")
	public WebElement tableRow;
	
	@FindBy(id="ohrmList_chkSelectAll")
	public WebElement checkbox;
	
	@FindBy(id="btnDelete")
	public WebElement button;
	
	@FindBy(id="dialogDeleteBtn")
	public WebElement button1;
	
	
	
	
	
	
	
			
	
	
	
	
	
	


	
   public AddVaccCriteriaPage() {
	   PageFactory.initElements(driver, this);
   }
	
	
	
	
	
	
	
	
	
	
	
	
	


}
