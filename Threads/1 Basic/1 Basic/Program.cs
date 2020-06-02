using System;
using System.Threading;

namespace _1_Basic
{
    class Program
    {

        public static void Server()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Secondary: {0}", i);
                Thread.Sleep(0);
            }
        }



        static void Main(string[] args)
        {
            Thread thread = new Thread(new ThreadStart(Server));
            thread.Start();

            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine("Main: Do stuff number {0}.",i);
                Thread.Sleep(0);
            }
            Console.ReadLine();
        }
    }
}