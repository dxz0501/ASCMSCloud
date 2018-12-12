#include "webmainwin.h"
#include "ui_webmainwin.h"

WebMainWin::WebMainWin(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::WebMainWin)
{
    ui->setupUi(this);
    ui->webAxWidget->dynamicCall("Navigate(const QString&)", "http://www.baidu.com");
}

WebMainWin::~WebMainWin()
{
    delete ui;
}
