class RockController < ApplicationController
    def rock_index
        render :rock_index
    end

    def rock_answer
        answer = params[:answer]
        @random_answer = ["rock", "paper", "scissors"].sample
        winner = {"rock" => "paper", "paper" => "scissors", "scissors" => "rock"}
        if @random_answer == answer
            @result = "Draw!!!"
        elsif winner[answer] == @random_answer
            @result = "You lose!!! try again"
        else
            @result = "You win!!!"
        end
        
        render :rock_answer
    end
end