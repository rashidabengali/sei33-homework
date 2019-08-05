$(document).ready(function () {
  /*=========== MODEL ==================*/
  const balance = {

    checkingBalance: 0,
    savingBalance: 0,

    getCheckingBalance: function() {
      return this.checkingBalance;
    },

    getSavingBalance: function() {
      return this.savingBalance;
    },

    getTotalBalance: function() {
      return (this.checkingBalance + this.savingBalance);
    },

    withdrawChecking: function(amount) {
      const checking = this.getCheckingBalance();
      const totalBalance = this.getTotalBalance();
      if (checking >= amount) {
        this.checkingBalance = checking - amount;
      } else if (totalBalance >= amount) {
        this.checkingBalance = 0;
        this.savingBalance = totalBalance - amount;
      }
    },

    withdrawSaving: function(amount) {
      const saving = this.getSavingBalance();
      const totalBalance = this.getTotalBalance();
      if (saving >= amount) {
        this.savingBalance = saving - amount;
      } else if (totalBalance >= amount) {
        this.savingBalance = 0;
        this.checkingBalance = totalBalance - amount;
      }
    },

    depositChecking: function(amount) {
      this.checkingBalance = this.getCheckingBalance() + amount;
    },

    depositSaving: function(amount) {
      this.savingBalance = this.getSavingBalance() + amount;
    }
  };
  /*=========== VIEW ==================*/
  const balanceView = {

    getCheckingAmount: function() {
      return parseInt($('#checking-amount').val());
    },

    getSavingsAmount: function() {
      return parseInt($('#savings-amount').val());
    },

    setCheckingBalance: function(amount) {
      $('#checking-balance').html('$' + amount);
    },

    setSavingsBalance: function(amount) {
      $('#savings-balance').html('$' + amount);
    },

    styleCheckingBalance: function(amount) {
      if( amount === 0 ) {
        $('#checking-balance').addClass('zero');
      } else {
        $('#checking-balance').removeClass('zero');
      }
    },

    styleSavingsBalance: function(amount) {
      if( amount === 0 ) {
        $('#savings-balance').addClass('zero');
      } else {
        $('#savings-balance').removeClass('zero');
      }
    },

    resetCheckingAmount: function() {
      $('#checking-amount').val('').focus();
    },

    resetSavingsAmount: function() {
      $('#savings-amount').val('').focus();
    },

    renderCheckingBalance: function(amount) {
      this.setCheckingBalance(amount);
      this.styleCheckingBalance(amount);
      this.resetCheckingAmount();
    },

    renderSavingsBalance: function(amount) {
      this.setSavingsBalance(amount);
      this.styleSavingsBalance(amount);
      this.resetSavingsAmount();
    }

  };
  /*=========== CONTROLLER ==================*/
  const balanceController = {

    depositChecking: function() {
      const amount = balanceView.getCheckingAmount();
      if(!isNaN(amount)) {
        balance.depositChecking(amount);
        balanceView.renderCheckingBalance(balance.getCheckingBalance());
      }
    },

    depositSavings: function() {
      const amount = balanceView.getSavingsAmount();
      if(!isNaN(amount)) {
        balance.depositSaving(amount);
        balanceView.renderSavingsBalance(balance.getSavingBalance());
      }
    },

    withdrawChecking: function() {
      const amount = balanceView.getCheckingAmount();
      if(!isNaN(amount)) {
        balance.withdrawChecking(amount);
        balanceView.renderCheckingBalance(balance.getCheckingBalance());
        balanceView.renderSavingsBalance(balance.getSavingBalance());
      }
    },

    withdrawSavings: function() {
      const amount = balanceView.getSavingsAmount();
      if(!isNaN(amount)) {
        balance.withdrawSaving(amount);
        balanceView.renderCheckingBalance(balance.getCheckingBalance());
        balanceView.renderSavingsBalance(balance.getSavingBalance());
      }
    },

    init: function() {
      $('#checking-deposit').on('click', this.depositChecking);
      $('#savings-deposit').on('click', this.depositSavings);
      $('#checking-withdraw').on('click',this.withdrawChecking);
      $('#savings-withdraw').on('click',this.withdrawSavings);
    }

  };

  balanceView.renderCheckingBalance(balance.getCheckingBalance());
  balanceView.renderSavingsBalance(balance.getSavingBalance());

  balanceController.init();

  // const depositChecking = function () {
  //   balanceController.depositChecking();
  // }
  //
  // const depositSavings = function () {
  //   balanceController.depositSavings();
  // }
  //
  // const checkingWithdraw = function () {
  //   balanceController.withdrawChecking();
  // }
  //
  // const savingsWithdraw = function () {
  //   balanceController.withdrawSavings();
  // }

  //$('#checking-deposit').on('click', depositChecking);
  // $('#savings-deposit').on('click', depositSavings);
  // $('#checking-withdraw').on('click',checkingWithdraw);
  // $('#savings-withdraw').on('click',savingsWithdraw);
});
