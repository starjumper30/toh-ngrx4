*** Settings ***
Library    Remote    http://localhost:${PORT}

*** Variables ***
${HOST}    localhost
${PORT}    8270

*** Test Cases ***

Load App
    Start Protractor
    Verify App Load

Test Dashboard
    Load Dashboard
    Verify Dashboard Heroes

Test Heroes Page
    Load Heroes Page


Shutdown
    Stop Protractor


*** Keywords ***

Verify App Load
    Navigate To Page    App
    ${pText} =    App Page Get Paragraph Text
    Should Contain    ${pText}  Tour of Heroes

Load Dashboard
    Navigate To Page    Dashboard
    ${pText} =    Dashboard Page Get Title
    Should Contain    ${pText}  Top Heroes

Verify Dashboard Heroes
    ${pText} =    Dashboard Page Get Hero List
    Should Contain    ${pText}  Narco Bombasto Celeritas Magneta

Load Heroes Page
    Navigate To Page    Heroes
    ${pText} =    Heroes Page Get Title
    Should Contain    ${pText}  My Heroes



