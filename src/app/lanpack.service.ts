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
      admistrationExpenses: "Admistration expenses",
      appropriationsIncome: "Appropriations (income)",
      apartmentExpenses: "Apartment expenses",
      appropriations: "Appropriations",
      appropriationsExpense: "Appropriations (expense)",
      assets: "Assets",
      assetsTotal: "Assets total",

      balanceSheet: "Balance sheet",
      buildings: "Buildings",

      capital: "Capital",
      capitalAndReserves: "Capital and reserves",
      capitalAndReservesTotal: "Capital and reserves, Total",
      cashInHandAndInBank: "Cash in hand and in bank",
      cashOrBank: "Cash or bank",
      computerDeviceAndSoftware: "Computer device and software",
      creditors: "Creditors",
      creditorsTotal: "Creditors total",
      currentAssets: "Current assets",
      currentAssetsTotal: "Current assets, total",

      debtor: "Debtor",
      debtors: "Debtors",
      depreciationsAccordingToPlan: "Depreciations according to plan",
      depreciationsAndReductionsInValue: "Depreciations and reductions in value",
      depreciationsAndReductionsInValueTotal: "Depreciations and reductions in value, total",

      equityAndLiabilities: "Equity and liabilities",
      equityAndLiabilitiesTotal: "Equity and liabilities, total",
      externalServices: "External services",

      financialExpenses: "Financial expenses",
      financialIncome: "Financial income",

      income: "Income",
      incomeTaxes: "Income taxes",
      intangibleAssets: "Intangible assets",
      investments: "Investments",

      loanOrDebt: "Loan or debt",
      loansFromCreditInstitutions: "Loans from credit institutions",
      longterm: "Longterm",
      longtermExpenses: "Longterm expenses",

      machineryAndEquipment: "Machinery and equipment",
      nonCurrentAssets: "Non-current assets",
      nonCurrentAssetsTotal: "Non-current assets total",

      operatingProfitLoss: "Operating profit (loss)",
      optionalStaffExpenses: "Optional staff expenses",
      otherCreditors: "Other creditors",
      otherOperatingExpenses: "Other operating expenses",
      otherOperatingExpensesTotal: "Other operating expenses, total",
      otherOperatingIncome: "Other operating income",
      otherReceivables: "Other receivables",
      otherReserves: "Other reserves",
      otherSocialSecurityExpenses: "Other social security expenses",

      pensionExpenses: "Pension expenses",
      previous: "previous",
      profitAndLossAccount: "Profit and loss account",
      profitLossBeforeAppropriationsAndTaxes: "Profit (loss) before appropriations and taxes",
      profitLossOfTheFinancialYear: "Profit (loss) of the financial year",
      provisions: "Provisions",
      purchasesDuringTheFinancialYear: "Purchases during the financial year",

      rawMaterialsAndConsumables: "Raw materials and consumables",
      rawMaterialsAndConsumablesTotal: "Raw materials and consumables, total",
      rawMaterialsAndServices: "Raw materials and services",
      rawMaterialsAndServicesTotal: "Raw materials and services, total",
      reductionsInValue: "Reductions in value",
      representationExpenses: "Representation expenses",
      researchAndDevelopmentExpenses: "Research and development expenses",
      retairnedEarnings: "Retairned earnings (loss)",
      revaluationReserve: "Revaluation reserve",

      salesAndMarketingExpenses: "Sales and marketing expenses",
      shortterm: "Shortterm",
      shorttermCreditorsTotal: "Shortterm creditors, total",
      shorttermDeptorsTotal: "Shortterm debtors, total",
      shorttermEquipment: "Shortterm equipment",
      shorttermExpenses: "Shortterm expenses",
      socialSecurityExpenses: "Social security expenses",
      staffExpenses: "Staff expenses",
      staffExpensesTotal: "Staff expenses, total",
      stocks: "Stocks",
      subscribedCapital: "Subscribed capital",

      tangibleAssets: "Tangible assets",
      tangibleAssetsTotal: "Tangible assets, total",
      tradeCreditors: "Trade creditors",
      tradeDebtors: "Trade debtors",
      travelExpenses: "Travel expenses",
      turnoverNetSales: "Turnover (net sales)",

      variationsInStocks: "Variations in stocks",
      vat: "VAT",
      vatDebt: "Vat-debt",
      vatReceivables: "Vat-receivables",
      vechileExpenses: "Vechile expenses",

      wagesAndSalaries: "Wages and salaries"


    },
    fi: {},
    se: {}
  }

  constructor() { }

  getPack(lan){
    return this.strings[lan];
  }

}
