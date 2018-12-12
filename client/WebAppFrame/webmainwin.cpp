#include "webmainwin.h"
#include "ui_webmainwin.h"

WebMainWin::WebMainWin(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::WebMainWin)
{
    ui->setupUi(this);
    this->setWindowTitle(" ");
}

WebMainWin::~WebMainWin()
{
    delete ui;
}

void WebMainWin::navigate(QString url)
{
        ui->webAxWidget->dynamicCall("Navigate(const QString&)", url);
}
