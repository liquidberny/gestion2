Feature: Login Page Verification on OrangeHRM website
     
    Scenario: check web page health through lighthouse audit and pa11y audit on valid login page display with login fields
          Given I open OrangeHRM homepage
          Then I should see web audit results