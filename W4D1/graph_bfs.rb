require "Set"

class GraphNode
    attr_reader :value
    attr_accessor :neighbors

    def initialize(val)
        @value = val
        @neighbors = []
    end

    def add_neighbor(node)
        @neighbors << node
    end

    def self.bfs(starting_node, target_value)
        set = Set.new()
        queue = [starting_node]
        until queue.empty?
            node = queue.shift
            unless set.include?(node)
                if node.value == target_value
                    return node.value
                else
                    queue += node.neighbors
                    set.add(node)
                end
            end
        end

        nil
    end
end


#Testing Purposes
if __FILE__ == $PROGRAM_NAME
    a = GraphNode.new('a')
    b = GraphNode.new('b')
    c = GraphNode.new('c')
    d = GraphNode.new('d')
    e = GraphNode.new('e')
    f = GraphNode.new('f')
    a.neighbors = [b, c, e]
    c.neighbors = [b, d]
    e.neighbors = [a]
    f.neighbors = [e]
    
    p GraphNode.bfs(a, "d")
end