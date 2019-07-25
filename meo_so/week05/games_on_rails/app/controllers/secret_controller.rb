class SecretController < ApplicationController
    def index
    end

    def result
        answer = rand(1..10)
        if params[:guess].to_i == answer
            render :correct
        else 
            render :wrong
        end
    end
end
