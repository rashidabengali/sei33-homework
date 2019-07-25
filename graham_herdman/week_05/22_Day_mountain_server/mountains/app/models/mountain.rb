# == Schema Information
#
# Table name: mountains
#
#  id          :integer          primary key
#  name        :text
#  image       :text
#  height      :float
#  planet      :text
#  country     :text
#  summited_by :text
#

class Mountain < ActiveRecord::Base
end
