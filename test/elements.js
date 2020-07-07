import { subBtnCount, addBtnCount } from "../helpers/BlackBtsCounter";
const selectorGen = require('../data/selectors.json').general;
const expectedGen = require('./../data/expected.json').general;
const selectedCnt = require('./../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;
const expectedDCF = require('../data/expected.json').defaultCounterFunctionality;


describe('Complex Counter App', function () {

    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });

    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const actual = $(selectorGen.header).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const actual = $(selectorGen.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-004 Add Name Field', function () {
            const actual = $(selectorGen.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length-2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })

        it('TC-006 Default Value Field', function () {
            const actual = $(selectorGen.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Value Field', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length-1].isDisplayed();
            //$$('label')[$$('label').length-1]
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter', function () {
            const actual = $(selectorGen.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })
    });

    describe('Elements value', function () {
        it('TC-009 Header = Counter', function () {
            const actual = $(selectorGen.header).getText();
            expect(actual).toEqual(expectedGen.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorGen.totalResult).getText();
            expect(actual).toEqual(expectedGen.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(expectedGen.addNameFieldLabel);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $(selectorGen.addNameField).getValue();
            expect(actual).toEqual(expectedGen.addNameField);
        })

        it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length-1].getText();
            expect(actual).toEqual(expectedGen.defaultValueFieldLabel);
        })

        it('TC-014 Placeholder for Default Value Field = 50', function () {
            const actual = $(selectorGen.defaultValueField).getValue();
            expect(actual).toEqual(expectedGen.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorGen.addCounterBtn).getText();
            expect(actual).toEqual(expectedGen.addCounterBtn);
        })
    });

    describe('Default counter elements exist', function () {
        it('TC-016 Header name', function () {
            const actual = $$(selectedCnt.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-017 Count Value', function () {
            const actual = $(selectedCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-018 LLF', function () {
            const actual = $(selectedCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019 ULF', function () {
            const actual = $(selectedCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021 Default Sub Buttons', function () {
            //const actual = $$(selectedCnt.blackBtn).map(el => el.isDisplayed())
            const actual = $$(selectedCnt.blackBtn).filter(el => el.isDisplayed());
            expect(actual.length).toEqual(expectedCnt.defaultNumberBlackBtn);
        })

        it('TC-022 Delete Btn', function () {
            const actual = $(selectedCnt.deleteBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-023 Reset Btn', function () {
            const actual = $(selectedCnt.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-024 Edit Name Field', function () {
            const actual = $(selectedCnt.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-025 Label Edit Name Field', function () {
            const actual = $(selectedCnt.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-026 Input for LLF', function () {
            $(selectedCnt.lowerLimitField).click();
            const actual = $(selectedCnt.lowerInputField).isClickable();
            expect(actual).toEqual(true);
            expect($(selectedCnt.lowerInputField).getValue()).toEqual("1");
        });

        it('TC-027 Input for ULF', function () {
            $(selectedCnt.upperLimitField).click();
            const actual = $(selectedCnt.upperInputField).isClickable();
            browser.pause(3000)
            expect(actual).toEqual(true);
        });

        it('TC-028 Counter Name = 1. Default Counter', function () {
            const actual = $$(selectedCnt.counterName)[1].getText();
            expect(actual).toEqual(expectedCnt.counterName);
        });

        it('TC-029 Count Value = 0', function () {
            const actual = $(selectedCnt.countValue).getText();
            expect(actual).toEqual(expectedCnt.countValue);
        });

        it('TC-030 LLF = CHANGE STEP OPTIONS?', function () {
            browser.refresh()
            const actual = $(selectedCnt.lowerLimitField).getText();
            expect(actual).toEqual(expectedCnt.lowerLimitField);
        });

        it('TC-031 Default Sub Buttons = -1, -2, -3', function () {
            const allElements = $$(selectedCnt.blackBtn);
             expect(subBtnCount(allElements)).toEqual(expectedCnt.defaulValuetSubBtns);
        });

        it('TC-032 ULF = CHANGE STEP OPTIONS?', function () {
            browser.refresh()
            const actual = $(selectedCnt.upperLimitField).getText();
            expect(actual).toEqual(expectedCnt.upperLimitField);
        });

        it('TC-033 Default Add Buttons = 1, 2, 3', function () {
            const allElements = $$(selectedCnt.blackBtn);
            expect(addBtnCount(allElements, expectedDCF.nForBlackBtnCountTC033)).toEqual(expectedCnt.defaulValuetAddBtns);
        });

        it('TC-034 Delete button = Delete', function () {
            const actual = $(selectedCnt.deleteBtn).getText();
            expect(actual).toEqual(expectedCnt.deleteBtn);
        });

        it('TC-035 Reset button = Reset', function () {
            const actual = $(selectedCnt.resetBtn).getText();
            expect(actual).toEqual(expectedCnt.resetBtn);
        });

        it('TC-036 Label = Edit Counter Title', function () {
            const actual = $(selectorGen.defaultValueFieldLabel).getText();
            expect(actual).toEqual(expectedGen.editNameFieldLabel);
        });

        it('TC-037 Placeholder for Edit Name Field = Default Counter', function () {
            const actual = $(selectedCnt.editNameField).getValue();
            expect(actual).toEqual(expectedCnt.editNameField);
        });

        it('TC-038 Input for LLF = 1', function () {
            $(selectedCnt.lowerLimitField).click();
            $(selectedCnt.lowerInputField).click()
            const actual = $(selectedCnt.lowerInputField).getValue();
            expect(actual).toEqual(expectedDCF.defCountValueLLF);
        });

        it('TC-039 Input for LLF = 1', function () {
            $(selectedCnt.upperLimitField).click();
            $(selectedCnt.upperInputField).click()
            const actual = $(selectedCnt.upperInputField).getValue();
            expect(actual).toEqual(expectedDCF.defCountValueULF);
        });
    });
});
