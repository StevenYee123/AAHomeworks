class Stack
    attr_reader :stack
    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end

    def pop
        @stack.pop
    end

    def peek
        @stack[-1]
    end
end

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.unshift(el)
    end

    def dequeue
        @queue.pop
    end

    def peek
        @queue[-1]
    end
end

class Map
    attr_reader :map

    def initialize(arr)
        @map = arr
    end

    def set(key, val)
        any = @map.any? do |sub_arr|
            sub_arr.first == key
        end

        unless any 
            @map << [key, val]
            return @map
        end

        @map.each do |sub_arr|
            if sub_arr.first == key
                sub_arr[-1] = val
                return @map
            end
        end
    end

    def get(key)
        @map.each do |sub_arr|
            if sub_arr.first == key
                return sub_arr[-1]
            end
        end

        nil
    end

    def delete(key)
        @map.each_with_index do |sub_arr, idx|
            if sub_arr.first == key
                @map.delete_at(idx)
            end
        end

        nil
    end

    def show
        @map
    end
end

#Just some examples to test the code

# if __FILE__ == $PROGRAM_NAME
#     map = Map.new([[2,3], ["hello", "world"], [5, 6]])
#     p map.get("howdy")
#     map.delete(2)
#     p map.show
#     map.set(2,3)
#     p map.show
# end