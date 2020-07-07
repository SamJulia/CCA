import { inputNumber } from "../helpers/inputNumber";
import { addSubBtnsCount } from "../helpers/BlackBtsCounter";
const selectorCnt = require ('../data/selectors.json').counter;
const expectedDCF = require ('../data/expected.json').defaultCounterFunctionality;

describe('Default counter functionality', function () {
    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })
    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })
    it('TC-042 LLF accept 1', function () {
        inputNumber('left', expectedDCF.inputMin);
        const result = $(selectorCnt.errorMsg).isDisplayed();
        expect(result).toEqual(false);
    })
    it('TC-043 ULF accept 9', function () {
        inputNumber('right', expectedDCF.inputMax);
        const result = $(selectorCnt.errorMsg).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        $(selectorCnt.lowerInputField).setValue(expectedDCF.inputMin);
        $(selectorCnt.upperInputField).setValue(expectedDCF.inputMin);
        const allElements = $$(selectorCnt.blackBtn);
        expect(addSubBtnsCount(allElements).length).toEqual((expectedDCF.blackBtnsCount));
    })

    it('TC-045 LLF = 9 and ULF = 9 gives 2 black buttons', function () {
        $(selectorCnt.upperInputField).setValue(expectedDCF.inputMax);
        $(selectorCnt.lowerInputField).setValue(expectedDCF.inputMax);
        const allElements = $$(selectorCnt.blackBtn);
        expect(addSubBtnsCount(allElements).length).toEqual((expectedDCF.blackBtnsCount));
    });

    it('TC-046 Reset button works', function () {
        $(selectorCnt.resetBtn).click();
        const actual = $(selectorCnt.countValue).getText();
        expect(actual).toEqual(expectedDCF.countValue);
    });

    it('TC-047 Delete button works', function () {
        $(selectorCnt.deleteBtn).click();
        const actual = $(selectorCnt.defaultCounterFirst).isDisplayed();
        expect(actual).toEqual(false);
    });

});