class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false 
    @seq = []
  end

  def play
    until game_over 
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    sleep(5)
    require_sequence
    round_success_message
    @sequence_length += 1
    
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    arr = seq.dup 
    until arr.empty 
      print 'Follow the sequence you just saw'
      input = gets.chomp 
      if input != arr.first 
        @game_over = true
      else
        round_success_message
        sequence_length += 1
        arr.shift
      end
    end
  end

  def add_random_color
    num = rand(0...COLORS.length)
    @seq << COLORS[num]
  end

  def round_success_message
    print 'Congrats! Moving on...'
  end

  def game_over_message
    print 'Too bad, you lost...'
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
