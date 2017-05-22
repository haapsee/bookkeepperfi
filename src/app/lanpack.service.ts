import { Injectable } from '@angular/core';

@Injectable()
export class LanpackService {

/*
  en = english
  fi = finnish
  se = swedish
*/
  strings: any = {
    // english
    en: {
      previous: "previous",
      balanceSheet: "Balance sheet",
      assets: "Assets",
      nonCurrentAssets: "Non-current assets",
      intangibleAssets: "Intangible assets",
      tangibleAssets: "Tangible assets",
      buildings: "Buildings",
      machineryAndEquipment: "Machinerty and equipment",
      tangibleAssetsTotal: "Tangible assets, total",
      investments: "Investements",
      nonCurrentAssetsTotal: "Non-current assets total",
      currentAssets: "Current assets",
      stocks: "Stocks",
      debtors: "Debtors",
      longterm: "Longterm",
      shortterm: "Shortterm",
      tradeDebtors: "Trade debtors",
      vatReceivables: "Vat-receivables",
      otherReceivables: "Other receivables",
      shorttermDeptorsTotal: "Shortterm debtors, total",
      cashInHandAndInBank: "Cash in hand and in bank",
      currentAssetsTotal: "Current assets, total",
      assetsTotal: "Assets total",
      equityAndLiabilities: "Equity and liabilities",
      capitalAndReserves: "Capital and reserves",
      subscribedCapital: "Subscribed capital",
      revaluationReserve: "Revaluation reserve",
      otherReserves: "Other reserves",
      retairnedEarnings: "Retairned earnings (Loss)",
      profitLossOfTheFinancialYear: "Profit (loss) of the financial year",
      capitalAndReservesTotal: "Capital and reserves, Total",
      appropriations: "Appropriations",
      provisions: "Provisions",
      creditors: "Creditors",
      loansFromCreditInstitutions: "Loans from credit institutions",
      tradeCreditors: "Trade creditors",
      vatDebt: "Vat-debt",
      otherCreditors: "Other creditors",
      shorttermCreditorsTotal: "Shortterm creditors, total",
      creditorsTotal: "Creditors total",
      equityAndLiabilitiesTotal: "Equity and liabilities, total",

      /*
      * Part 2
      */
      profitAndLossAccount: "Profit and loss account",
      turnoverNetSales: "Turnover (net sales)",
      otherOperatingIncome: "Other operating income",
      rawMaterialsAndServices: "Raw materials and services",
      rawMaterialsAndConsumables: "Raw materials and consumables",
      purchasesDuringTheFinancialYear: "Purchases during the financial year",
      variationsInStocks: "Variations in stocks",
      rawMaterialsAndConsumablesTotal: "Raw materials and consumables, total",
      externalServices: "External services",
      rawMaterialsAndServicesTotal: "Raw materials and services, total",
      staffExpenses: "Staff expenses",
      wagesAndSalaries: "Wages and salaries",
      socialSecurityExpenses: "Social security expenses",
      pensionExpenses: "Pension expenses",
      otherSocialSecurityExpenses: "Other social security expenses",
      staffExpensesTotal: "Staff expenses, total",
      depreciationsAndReductionsInValue: "Depreciations and reductions in value",
      reductionsInValue: "Reductions in value",
      depreciationsAndReductionsInValueTotal: "Depreciations and reductions in value, total",
      otherOperatingExpenses: "Other operating expenses",
      optionalStaffExpenses: "Optional staff expenses",
      apartmentExpenses: "Apartment expenses",
      vechileExpenses: "Vechile expenses",
      computerDeviceAndSoftware: "Computer device and software",
      shorttermEquipment: "Shortterm equipment",
      travelExpenses: "Travel expenses",
      representationExpenses: "Representation expenses",
      salesAndMarketingExpenses: "Sales and marketing expenses",
      researchAndDevelopmentExpenses: "Research and development expenses",
      admistrationExpenses: "Admistration expenses",
      otherOperatingExpensesTotal: "Other operating expenses, total",
      operatingProfitLoss: "Operating profit (Loss)",
      financialIncome: "Financial income",
      financialExpenses: "Financial expenses",
      profitLossBeforeAppropriationsAndTaxes: "Profit (Loss) before appropriations and taxes",
      appropriationsIncome: "Appropriations (income)",
      appropriationsExpense: "Appropriations (expense)",
      incomeTaxes: "Income taxes",


    },
// finnish
    fi: {
      previous: "takaisin",
      balanceSheet: "Tase"
    }
  }

  constructor() { }

  getPack(lan){
    return this.strings[lan];
  }

}
