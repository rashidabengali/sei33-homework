
# bmi formulae = kg / m^2
# get user's weight and height (in meter)

def bmi
    puts "Let's check your body mass".center(70)
    puts "-=" * 40
    puts "[y] - begin BMI calculator"
    puts "[n] - quit"
end

###################################BMI calculation function############### // not showing
def bmi_formula (kg, m)
    result = kg / (m ** 2)
end

######################################################################
bmi #call bmi because at the end of the loop it will run this code again.

###################################get user input###################################
print "Let's calculate BMI? (y/n): "
answer = gets.chomp.downcase
until answer == 'n'
    print "Please enter your weight in kg: "
    user_weight = gets.to_i
    
    print "Please enter your height in meter: "
    user_height = gets.to_f

        
    #substitute this in parenthese
    total = bmi_formula user_weight, user_height
    message = "Your Body Mass Index is #{total.round(2)}."

    if total >= 25 
        puts "#{message} You are overweight! Time to hit gym!"
    elsif total >= 18.5
        puts "#{message} You are healthy! Keep the good works!"
    else 
        puts "#{message} You are severely underweight!"
    end
    bmi
    answer = gets.chomp.downcase
    
end
print "See you again next time!"
    


##########################################################################################



##########################################################################################



