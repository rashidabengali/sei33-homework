class SecretNumberController < ApplicationController
    def secret_index
        render :secret_index
    end

    def secret_answer
        min = params[:min_number].to_i
        max = params[:max_number].to_i
        guess_number = params[:secret_number].to_i
        @secret_answer = (min..max).to_a.sample
        if @secret_answer == guess_number
            @answer = "Congratulation, you win!!!"
        else
            @answer = "Wrong!! Try again"
        end

        render :secret_answer
    end
end