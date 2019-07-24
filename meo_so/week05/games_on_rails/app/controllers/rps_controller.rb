class RpsController < ApplicationController
    def index
    end

    def result
        @ai_move = ['rock', 'paper', 'scissors'].sample
        @player_move = params[:move]
        if (@player_move == 'rock' && @ai_move == 'paper') ||
            (@player_move == 'scissors' && @ai_move == 'rock') ||
            (@player_move == 'paper' && @ai_move == 'scissors')
            @message = "You lose"
            render :lose
        elsif @player_move == @ai_move
            @message = "Draw game"
            render :lose
        else 
            render :win
        end
    end
end