using System.Collections.Generic;

namespace Database
{
    public static class InMemory
    {
        public static List<Students> students = new List<Students> {
            new Students {
                Id = 10000,
                Email = "jon.doe@oit.edu"
            },
            new Students {
                Id = 10001,
                Email = "jane.doe@oit.edu"
            },
            new Students {
                Id = 10002,
                Email = "jim.doe@oit.edu"
            },
            new Students {
                Id = 10003,
                Email = "jen.doe@oit.edu"
            },
            new Students {
                Id = 10004,
                Email = "jerry.doe@oit.edu"
            }
        };
        public static List<Person> persons = new List<Person> {
            new Person {
                Id = 1,
                First = "Arthur",
                Middle = "J",
                Last = "Clark"
            },
            new Person {
                Id = 2,
                First = "Amity",
                Middle = "L",
                Last = "Clark"
            },
            new Person {
                Id = 3,
                First = "Ace",
                Middle = "W",
                Last = "Clark"
            },
            new Person {
                Id = 4,
                First = "Abe",
                Middle = "A",
                Last = "Clark"
            },
            new Person {
                Id = 5,
                First = "Axel",
                Middle = "J",
                Last = "Clark"
            }
        };
    }
}