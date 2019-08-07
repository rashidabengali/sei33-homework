# == Schema Information
#
# Table name: mountains
#
#  id           :integer          primary key
#  name         :text
#  image        :text
#  map          :text
#  country      :text
#  parent_range :text
#  elevation    :integer
#

class Mountain < ActiveRecord::Base
end
