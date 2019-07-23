class MagicController < ApplicationController
    def magic_index
        render :magic_index
    end

    def magic_answer
        @question = params[:question]
        answer = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", 
                 "As I see it, yes.", "Most likely.", "Outlook good.", "Yes", "Signs point to yes.", "Don't count on it.", 
                "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
        @answer = answer.sample
        render :magic_answer
    end
end