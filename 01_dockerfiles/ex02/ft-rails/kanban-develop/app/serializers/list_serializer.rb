# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  title      :string
#  open       :boolean          default(TRUE), not null
#  created_at :datetime
#  updated_at :datetime
#  position   :integer
#
# Indexes
#
#  index_lists_on_board_id  (board_id)
#

class ListSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :open, :position, :title

  has_many :cards, embed: :objects

  def board_id
    object.board.id
  end
end
