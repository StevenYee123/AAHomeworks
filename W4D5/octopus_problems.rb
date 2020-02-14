def sluggish_octopus(fish_arr)
    max = 0 
    longest = ""

    fish_arr.each do |fish|
        length = 0
        fish.each_char do |char|
            length += 1
        end
        if length > max 
            longest = fish
        end
    end

    longest
end

def dominant_octopus(arr)
    return arr if arr.length <= 1

    mid = arr.length / 2
    left = dominant_octopus(arr[0...mid])
    right = dominant_octopus(arr[mid..-1])

    merge(left, right)
end

def merge(left, right)
    result = []
    until left.empty? || right.empty? 
        case left.length <=> right.length 
        when -1 
            result << left.shift
        when 0 
            result << left.shift 
        when 1 
            result << right.shift 
        end
    end 
    result + left + right 
end

def clever_octopus(arr)
    max = 0 
    longest = ""
    arr.each do |fish|
        if fish.length > max
            max = fish.length 
            longest = fish
        end
    end

    longest
end

def slow_dance(direction, tiles_array)
    tiles_array.each_with_index do |arrow, idx|
        return idx if arrow == direction
    end
end

def fast_dance(direction, dance_moves)
    dance_moves[direction]
    
end

p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])
p dominant_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])[-1]
p clever_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)

DANCE_MOVES = {
        "up" => 0,
        "right-up" => 1, 
        "right" => 2,
        "right-down" => 3,
        "down" => 4, 
        "left-down" => 5,
        "left" => 6,
        "left-up" => 7
    }
puts 
p fast_dance("up", DANCE_MOVES)
p fast_dance("right-down", DANCE_MOVES)