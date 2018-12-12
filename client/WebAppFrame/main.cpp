#include "webmainwin.h"
#include <QApplication>
#include <QDebug>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    QString url = "www.baidu.com";
    if(argc > 1){
        url = QString::fromUtf8(argv[1]);
    }
    WebMainWin w;
    w.navigate(url);
    w.showMaximized();

    return a.exec();
}
