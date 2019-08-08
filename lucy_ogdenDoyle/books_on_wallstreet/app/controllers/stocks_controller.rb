class StocksController < ApplicationController
  def home
    render :home
  end

  def result
    StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
    @stock_symbol = params[:stock_symbol].upcase
    @info = StockQuote::Stock.quote @stock_symbol;
    @price = @info.close
    render :result
  end
end
