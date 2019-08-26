# == Schema Information
#
# Table name: authors
#
#  id    :bigint           not null, primary key
#  name  :text
#  dob   :date
#  style :text
#  image :text
#

class Author < ActiveRecord::Base
    has_many :comics
end
