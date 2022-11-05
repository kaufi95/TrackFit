import moment from 'moment';

const testdata = () => {
  return [
    {
      id: '1',
      name: 'Chest-Bizeps-Day',
      exercises: [
        {
          name: 'Benchpress',
          sessions: [
            {
              date: moment(new Date(2022, 10, 5).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 3, 22).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 4, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        },
        {
          name: 'Butterfly',
          sessions: [
            {
              date: moment(new Date(2022, 4, 22).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 5, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        },
        {
          name: 'Cable-Cross',
          sessions: [
            {
              date: moment(new Date(2022, 9, 22).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 9, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Back-Day',
      exercises: [
        {
          name: 'Pullups',
          sessions: [
            {
              date: moment(new Date(2022, 7, 22).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 7, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        },
        {
          name: 'Lat-Pulldown',
          sessions: [
            {
              date: moment(new Date(2022, 7, 22).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 5, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        },
        {
          name: 'Seated-Row',
          sessions: [
            {
              date: moment(new Date(2022, 8, 22).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 31,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 7, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'TestWorkout3',
      exercises: [
        {
          name: 'TestExercise1',
          sessions: [
            {
              date: moment(new Date(2022, 5, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 1, 20).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        },
        {
          name: 'TestExercise2',
          sessions: [
            {
              date: moment(new Date(2022, 2, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 3, 20).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        },
        {
          name: 'TestExercise3',
          sessions: [
            {
              date: moment(new Date(2022, 7, 21).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            },
            {
              date: moment(new Date(2022, 5, 20).setHours(0, 0, 0, 0)),
              sets: [
                {
                  index: 0,
                  weight: 20,
                  repeats: 8
                },
                {
                  index: 1,
                  weight: 25,
                  repeats: 6
                },
                {
                  index: 2,
                  weight: 30,
                  repeats: 6
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'Test',
      exercises: [
        {
          name: 'TestExercise1',
          sessions: []
        },
        {
          name: 'TestExercise2',
          sessions: []
        },
        {
          name: 'TestExercise3',
          sessions: []
        }
      ]
    }
  ];
};

export default testdata;
