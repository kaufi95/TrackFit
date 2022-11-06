import moment from 'moment';

const testdata = () => {
  return [
    {
      id: '1',
      name: 'Chest Day',
      disabled: false,
      exercises: [
        {
          name: 'Benchpress',
          sessions: [
            {
              date: moment(new Date(2022, 10, 5)).startOf('day'),
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
              date: moment(new Date(2022, 9, 28)).startOf('day'),
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
              date: moment(new Date(2022, 9, 21)).startOf('day'),
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
              date: moment(new Date(2022, 9, 14)).startOf('day'),
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
              date: moment(new Date(2022, 9, 7)).startOf('day'),
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
              date: moment(new Date(2022, 9, 1)).startOf('day'),
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
              date: moment(new Date(2022, 8, 25)).startOf('day'),
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
              date: moment(new Date(2022, 10, 5)).startOf('day'),
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
              date: moment(new Date(2022, 10, 5)).startOf('day'),
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
              date: moment(new Date(2022, 9, 28)).startOf('day'),
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
              date: moment(new Date(2022, 9, 21)).startOf('day'),
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
              date: moment(new Date(2022, 9, 14)).startOf('day'),
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
              date: moment(new Date(2022, 9, 7)).startOf('day'),
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
      name: 'Back Day',
      disabled: false,
      exercises: [
        {
          name: 'Pullups',
          sessions: [
            {
              date: moment(new Date(2022, 9, 22)).startOf('day'),
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
              date: moment(new Date(2022, 9, 15)).startOf('day'),
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
              date: moment(new Date(2022, 9, 22)).startOf('day'),
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
              date: moment(new Date(2022, 9, 15)).startOf('day'),
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
              date: moment(new Date(2022, 9, 22)).startOf('day'),
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
              date: moment(new Date(2022, 9, 15)).startOf('day'),
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
      name: 'Leg Day',
      disabled: false,
      exercises: [
        {
          name: 'Squats',
          sessions: [
            {
              date: moment(new Date(2022, 9, 14)).startOf('day'),
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
              date: moment(new Date(2022, 9, 7)).startOf('day'),
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
          name: 'Hip-Thrust',
          sessions: [
            {
              date: moment(new Date(2022, 9, 14)).startOf('day'),
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
              date: moment(new Date(2022, 9, 7)).startOf('day'),
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
          name: 'Seated-Leg-Curl',
          sessions: [
            {
              date: moment(new Date(2022, 9, 14)).startOf('day'),
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
              date: moment(new Date(2022, 9, 7)).startOf('day'),
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
    }
  ];
};

export default testdata;
