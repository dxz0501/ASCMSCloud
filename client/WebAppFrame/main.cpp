#include "webmainwin.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    WebMainWin w;
    w.show();

    return a.exec();
}
