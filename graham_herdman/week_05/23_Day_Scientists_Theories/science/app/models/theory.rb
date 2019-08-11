# == Schema Information
#
# Table name: theories
#
#  id           :bigint           not null, primary key
#  name         :text
#  description  :text
#  image        :text
#  scientist_id :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Theory < ActiveRecord::Base
  belongs_to :scientist, :optional => true
end
