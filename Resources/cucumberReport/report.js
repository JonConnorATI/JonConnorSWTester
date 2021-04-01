$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScoreToGrade.feature");
formatter.feature({
  "line": 1,
  "name": "Scores and Grades",
  "description": "\r\nCalculate the grade from an exam score\r\n\r\nThe rules are:\r\nFor score less than 50 a fail, 50 to 64 a Pass, 65 to 79 a Merit and 80 to 100 a distinction. \r\nUsing values 49 50 64 65 79 80 will test all partitions and boundaries.",
  "id": "scores-and-grades",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Grades are calculated from the score",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "\u003cscore\u003e is entered into the score section",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the grade button is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "\u003caward\u003e should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score;",
  "rows": [
    {
      "cells": [
        "score",
        "award"
      ],
      "line": 16,
      "id": "scores-and-grades;grades-are-calculated-from-the-score;;1"
    },
    {
      "cells": [
        "49",
        "Fail"
      ],
      "line": 17,
      "id": "scores-and-grades;grades-are-calculated-from-the-score;;2"
    },
    {
      "cells": [
        "64",
        "Pass"
      ],
      "line": 18,
      "id": "scores-and-grades;grades-are-calculated-from-the-score;;3"
    },
    {
      "cells": [
        "65",
        "Merit"
      ],
      "line": 19,
      "id": "scores-and-grades;grades-are-calculated-from-the-score;;4"
    },
    {
      "cells": [
        "79",
        "Merit"
      ],
      "line": 20,
      "id": "scores-and-grades;grades-are-calculated-from-the-score;;5"
    },
    {
      "cells": [
        "80",
        "Distinction"
      ],
      "line": 21,
      "id": "scores-and-grades;grades-are-calculated-from-the-score;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Grades are calculated from the score",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "49 is entered into the score section",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the grade button is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Fail should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 0
    }
  ],
  "location": "GradeSteps.is_entered_into_the_score_section(int)"
});
formatter.result({
  "duration": 337131000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_grade_button_is_pressed()"
});
formatter.result({
  "duration": 105200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.fail_should_be_displayed()"
});
formatter.result({
  "duration": 91900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Grades are calculated from the score",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "64 is entered into the score section",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the grade button is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Pass should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 0
    }
  ],
  "location": "GradeSteps.is_entered_into_the_score_section(int)"
});
formatter.result({
  "duration": 258000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_grade_button_is_pressed()"
});
formatter.result({
  "duration": 74300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.pass_should_be_displayed()"
});
formatter.result({
  "duration": 89200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Grades are calculated from the score",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "65 is entered into the score section",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the grade button is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Merit should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 0
    }
  ],
  "location": "GradeSteps.is_entered_into_the_score_section(int)"
});
formatter.result({
  "duration": 236800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_grade_button_is_pressed()"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.merit_should_be_displayed()"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Grades are calculated from the score",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "79 is entered into the score section",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the grade button is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Merit should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "79",
      "offset": 0
    }
  ],
  "location": "GradeSteps.is_entered_into_the_score_section(int)"
});
formatter.result({
  "duration": 217500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_grade_button_is_pressed()"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.merit_should_be_displayed()"
});
formatter.result({
  "duration": 108500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Grades are calculated from the score",
  "description": "",
  "id": "scores-and-grades;grades-are-calculated-from-the-score;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "80 is entered into the score section",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the grade button is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Distinction should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 0
    }
  ],
  "location": "GradeSteps.is_entered_into_the_score_section(int)"
});
formatter.result({
  "duration": 209200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_grade_button_is_pressed()"
});
formatter.result({
  "duration": 113100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.distinction_should_be_displayed()"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
});