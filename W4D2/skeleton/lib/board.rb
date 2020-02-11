require 'byebug'
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1 
    @name2 = name2
    @cups = Array.new(14) { Array.new(4)}
    place_stones
  end

  def place_stones
    i = 0 
    while i < @cups.length 
      if i == 6 || i == 13 
        @cups[i] = []
      else
        @cups[i] = [:stone, :stone, :stone, :stone] 
      end
      
      i += 1
    end
    
  end

  def valid_move?(start_pos)
    if start_pos > 13 || start_pos < 0 
      raise 'Invalid starting cup'
    elsif @cups[start_pos].empty?
      raise 'Starting cup is empty'
    end
  end

  def make_move(start_pos, current_player_name)
    arr = @cups[start_pos]
    @cups[start_pos] = []
    i = start_pos

    # debugger
      if current_player_name == @name1
        while arr.length > 0
          i += 1 
          i = i % 14
          @cups[i] << arr.pop unless i == 13
        end
      end

      if current_player_name == @name2
        while arr.length > 0
          i = i % 14
          @cups[i] << arr.pop unless i == 6
          i += 1
        end
      end
 
    #[0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    
    self.render
    self.next_turn(i)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    # debugger
    if ending_cup_idx == 6 || ending_cup_idx == 13 
      return :prompt 
    elsif @cups[ending_cup_idx].nil? 
      return :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..6].all?(&:empty?) || @cups[7..13].all?(&:empty?)
  end

  def winner
    if @cups[6].length == @cups[13].length
      return :draw
    elsif @cups[6].length > @cups[13].length 
      return @name1
    else
      return @name2
    end
  end
end
